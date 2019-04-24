﻿using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace HotChocolate.Language
{
    public partial class Utf8Parser
    {
        private static DirectiveDefinitionNode ParseDirectiveDefinition(
            Utf8ParserContext context,
            ref Utf8GraphQLReader reader)
        {
            context.Start(ref reader);

            StringValueNode description = ParseDescription(context, ref reader);
            ParserHelper.ExpectDirectiveKeyword(ref reader);
            ParserHelper.ExpectAt(ref reader);
            NameNode name = ParseName(context, ref reader);
            List<InputValueDefinitionNode> arguments =
                ParseArgumentDefinitions(context, ref reader);
            bool isRepeatable = ParserHelper.SkipRepeatableKeyword(ref reader);
            ParserHelper.ExpectOnKeyword(ref reader);
            List<NameNode> locations =
                ParseDirectiveLocations(context, ref reader);

            Location location = context.CreateLocation(ref reader);

            return new DirectiveDefinitionNode
            (
                location,
                name,
                description,
                isRepeatable,
                arguments,
                locations
            );
        }

        private static List<NameNode> ParseDirectiveLocations(
            Utf8ParserContext context,
            ref Utf8GraphQLReader reader)
        {
            var list = new List<NameNode>();

            // skip optional leading pipe.
            ParserHelper.Skip(ref reader, TokenKind.Pipe);

            do
            {
                list.Add(ParseDirectiveLocation(context, ref reader));
            }
            while (ParserHelper.Skip(ref reader, TokenKind.Pipe));

            return list;
        }

        private static NameNode ParseDirectiveLocation(
            Utf8ParserContext context,
            ref Utf8GraphQLReader reader)
        {
            TokenKind kind = reader.Kind;
            NameNode name = ParseName(context, ref reader);
            if (DirectiveLocation.IsValidName(name.Value))
            {
                return name;
            }
            throw ParserHelper.Unexpected(ref reader, kind);
        }

        private static List<DirectiveNode> ParseDirectives(
            Utf8ParserContext context,
            ref Utf8GraphQLReader reader,
            bool isConstant)
        {
            var list = new List<DirectiveNode>();

            while (TokenHelper.IsAt(ref reader))
            {
                list.Add(ParseDirective(context, ref reader, isConstant));
            }

            return list;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static DirectiveNode ParseDirective(
            Utf8ParserContext context,
            ref Utf8GraphQLReader reader,
            bool isConstant)
        {
            context.Start(ref reader);

            ParserHelper.ExpectAt(ref reader);
            NameNode name = ParseName(context, ref reader);
            List<ArgumentNode> arguments =
                ParseArguments(context, ref reader, isConstant);

            Location location = context.CreateLocation(ref reader);

            return new DirectiveNode
            (
                location,
                name,
                arguments
            );
        }
    }
}
