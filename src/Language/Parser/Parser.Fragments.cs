using System;
using System.Collections.Generic;
using System.Linq;

namespace HotChocolate.Language
{
    // Implements the parsing rules in the Fragments section.
    public partial class Parser
    {
        /// <summary>
        /// Parses a fragment spred or inline fragment within a selection set.
        /// <see cref="ParseFragmentSpread" /> and <see cref="ParseInlineFragment" />.
        /// </summary>
        /// <param name="context">The parser context.</param>
        private ISelectionNode ParseFragment(ParserContext context)
        {
            Token start = context.Current;
            context.ExpectSpread();
            bool isOnKeyword = context.Current.IsOnKeyword();

            if (!isOnKeyword && context.Current.IsName())
            {
                return ParseFragmentSpread(context, start);
            }

            NamedTypeNode typeCondition = null;
            if (isOnKeyword)
            {
                context.MoveNext();
                typeCondition = ParseNamedType(context);
            }

            return ParseInlineFragment(context, start, typeCondition);
        }

        /// <summary>
        /// Parses a fragment definition.
        /// <see cref="FragmentDefinitionNode" />:
        /// fragment FragmentName on TypeCondition Directives? SelectionSet
        /// </summary>
        /// <param name="context">The parser context.</param>
        private FragmentDefinitionNode ParseFragmentDefinition(ParserContext context)
        {
            Token start = context.Current;
            context.ExpectFragmentKeyword();

            // Experimental support for defining variables within fragments 
            // changesthe grammar of FragmentDefinition:
            // fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
            if (context.Options.Experimental.AllowFragmentVariables)
            {
                NameNode name = ParseFragmentName(context);
                List<VariableDefinitionNode> variableDefinitions =
                  ParseVariableDefinitions(context);
                context.ExpectOnKeyword();
                NamedTypeNode typeCondition = ParseNamedType(context);
                List<DirectiveNode> directives =
                    ParseDirectives(context, false);
                SelectionSetNode selectionSet = ParseSelectionSet(context);
                Location location = context.CreateLocation(start);

                return new FragmentDefinitionNode
                (
                  location,
                  name,
                  variableDefinitions,
                  typeCondition,
                  directives,
                  selectionSet
                );
            }
            else
            {
                NameNode name = ParseFragmentName(context);
                context.ExpectOnKeyword();
                NamedTypeNode typeCondition = ParseNamedType(context);
                List<DirectiveNode> directives =
                    ParseDirectives(context, false);
                SelectionSetNode selectionSet = ParseSelectionSet(context);
                Location location = context.CreateLocation(start);

                return new FragmentDefinitionNode
                (
                  location,
                  name,
                  Array.Empty<VariableDefinitionNode>(),
                  typeCondition,
                  directives,
                  selectionSet
                );
            }
        }

        /// <summary>
        /// Parses a fragment spread.
        /// <see cref="FragmentSpreadNode" />:
        /// ... FragmentName Directives?
        /// </summary>
        /// <param name="context">The parser context.</param>
        /// <param name="start">The start token of the current fragment node.</param>
        private FragmentSpreadNode ParseFragmentSpread(
          ParserContext context, Token start)
        {
            NameNode name = ParseFragmentName(context);
            List<DirectiveNode> directives =
                ParseDirectives(context, false);
            Location location = context.CreateLocation(start);

            return new FragmentSpreadNode
            (
                location,
                name,
                directives
            );
        }

        /// <summary>
        /// Parse fragment name.
        /// <see cref="NameNode" />:
        /// Name
        /// </summary>
        /// <param name="context">The parser context.</param>     
        private NameNode ParseFragmentName(ParserContext context)
        {
            if (context.Current.IsOnKeyword())
            {
                throw context.Unexpected(context.Current);
            }
            return ParseName(context);
        }
    }
}