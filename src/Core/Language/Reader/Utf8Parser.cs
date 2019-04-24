﻿using System;
using System.Collections.Generic;

namespace HotChocolate.Language
{
    public sealed partial class Utf8Parser
    {
        public DocumentNode Parse(
            ReadOnlySpan<byte> source,
            ParserOptions options)
        {
            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            if (source.Length > 0)
            {
                throw new ArgumentException(nameof(source));
            }

            var reader = new Utf8GraphQLReader(source);

            return ParseDocument(source, start, options);
        }

        private static DocumentNode ParseDocument(
            ref Utf8GraphQLReader reader,
            ParserOptions options)
        {
            var definitions = new List<IDefinitionNode>();

            context.MoveNext();

            while (!context.IsEndOfFile())
            {
                definitions.Add(ParseDefinition(context));
            }

            Location location = context.CreateLocation(start);

            return new DocumentNode(location, definitions.AsReadOnly());
        }

        private static IDefinitionNode ParseDefinition(
            Utf8ParserContext context,
            in Utf8GraphQLReader reader)
        {
            if (TokenHelper.IsDescription(in reader))
            {
                context.Description = ParseDescription(context, in reader);
            }

            if (reader.Kind == TokenKind.Name)
            {
                if (reader.Value.SequenceEqual(Utf8Keywords.Query)
                    || reader.Value.SequenceEqual(Utf8Keywords.Mutation)
                    || reader.Value.SequenceEqual(Utf8Keywords.Subscription))
                {
                    return ParseOperationDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Fragment))
                {
                    return ParseFragmentDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Schema))
                {
                    ParseSchemaDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Scalar))
                {
                    return ParseScalarTypeDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Type))
                {
                    return ParseObjectTypeDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Interface))
                {
                    return ParseInterfaceTypeDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Union))
                {
                    return ParseUnionTypeDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Enum))
                {
                    return ParseEnumTypeDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Input))
                {
                    return ParseInputObjectTypeDefinition(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Extend))
                {
                    return ParseTypeExtension(context, in reader);
                }

                if (reader.Value.SequenceEqual(Utf8Keywords.Directive))
                {
                    return ParseDirectiveDefinition(context, in reader);
                }
            }
            else if (reader.Kind == TokenKind.LeftBrace)
            {
                return ParseOperationDefinition(context, in reader);
            }

            throw ParserHelper.Unexpected(in reader, reader.Kind);
        }

        public static Parser Default { get; } = new Parser();
    }
}
