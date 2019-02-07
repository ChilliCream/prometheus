using System;
using System.Collections.Generic;
using System.Linq;
using HotChocolate.Execution;
using HotChocolate.Language;

namespace HotChocolate.Stitching
{
    internal class MergeQueryRewriter
        : QuerySyntaxRewriter<bool>
    {
        private static readonly HashSet<string> _emptySet =
            new HashSet<string>();
        private readonly List<FieldNode> _fields = new List<FieldNode>();
        private readonly Dictionary<string, VariableDefinitionNode> _variables =
            new Dictionary<string, VariableDefinitionNode>();
        private readonly Dictionary<string, FragmentDefinitionNode> _fragments =
            new Dictionary<string, FragmentDefinitionNode>();
        private OrderedDictionary<string, string> _aliases;
        private readonly HashSet<string> _globalVariableNames;
        private NameString _requestPrefix;
        private bool _rewriteFragments;
        private OperationType? _operationType;

        public MergeQueryRewriter()
        {
            _globalVariableNames = _emptySet;
        }

        public MergeQueryRewriter(IEnumerable<string> globalVariableNames)
        {
            if (globalVariableNames == null)
            {
                throw new ArgumentNullException(nameof(globalVariableNames));
            }

            _globalVariableNames = new HashSet<string>(globalVariableNames);
        }

        private bool IsAutoGenerated => !_rewriteFragments;

        public IDictionary<string, string> AddQuery(
            DocumentNode document,
            NameString requestPrefix,
            bool isAutoGenerated)
        {
            if (document == null)
            {
                throw new ArgumentNullException(nameof(document));
            }

            requestPrefix.EnsureNotEmpty(nameof(requestPrefix));

            OperationDefinitionNode operation = document.Definitions
                .OfType<OperationDefinitionNode>()
                .FirstOrDefault();

            if (operation == null)
            {
                throw new ArgumentException(
                    "The query document must have at least one query.",
                    nameof(document));
            }

            if (_operationType.HasValue
                && _operationType.Value != operation.Operation)
            {
                throw new ArgumentException(
                    "You can only merge operations of the same type.",
                    nameof(document));
            }

            _operationType = operation.Operation;
            _requestPrefix = requestPrefix;
            _rewriteFragments = !isAutoGenerated;
            _aliases = new OrderedDictionary<string, string>();

            DocumentNode rewritten = RewriteDocument(document, true);
            operation = rewritten.Definitions
                .OfType<OperationDefinitionNode>()
                .First();

            foreach (VariableDefinitionNode variable in
                operation.VariableDefinitions)
            {
                if (!_variables.ContainsKey(variable.Variable.Name.Value))
                {
                    _variables.Add(variable.Variable.Name.Value, variable);
                }
            }

            foreach (FieldNode field in operation.SelectionSet
                .Selections.OfType<FieldNode>())
            {
                _fields.Add(field);
            }

            foreach (FragmentDefinitionNode fragment in rewritten.Definitions
                    .OfType<FragmentDefinitionNode>())
            {
                if (!_fragments.ContainsKey(fragment.Name.Value))
                {
                    _fragments.Add(fragment.Name.Value, fragment);
                }
            }

            return _aliases;
        }

        public DocumentNode Merge()
        {
            var definitions = new List<IDefinitionNode>();

            definitions.Add(new OperationDefinitionNode
            (
                null,
                new NameNode("exec_batch"),
                _operationType.Value,
                new List<VariableDefinitionNode>(_variables.Values),
                Array.Empty<DirectiveNode>(),
                new SelectionSetNode(null, new List<ISelectionNode>(_fields))
            ));

            definitions.AddRange(_fragments.Values);

            return new DocumentNode(null, definitions);
        }

        protected override VariableDefinitionNode RewriteVariableDefinition(
            VariableDefinitionNode node, bool context)
        {
            return IsAutoGenerated
                && _globalVariableNames.Contains(node.Variable.Name.Value)
                ? node
                : node.WithVariable(node.Variable.WithName(
                    node.Variable.Name.CreateNewName(_requestPrefix)));
        }

        protected override FieldNode RewriteField(FieldNode node, bool first)
        {
            FieldNode current = node;

            if (first)
            {
                NameNode responseName = node.Alias ?? node.Name;
                NameNode alias = responseName.CreateNewName(_requestPrefix);
                _aliases[alias.Value] = responseName.Value;
                current = current.WithAlias(alias);
            }

            current = Rewrite(current, node.Arguments, first,
                (p, c) => RewriteMany(p, c, RewriteArgument),
                current.WithArguments);

            if (node.SelectionSet != null)
            {
                current = Rewrite(current, node.SelectionSet, false,
                    RewriteSelectionSet, current.WithSelectionSet);
            }

            return current;
        }

        protected override FragmentSpreadNode RewriteFragmentSpread(
            FragmentSpreadNode node, bool first)
        {
            return _rewriteFragments
                ? node.WithName(node.Name.CreateNewName(_requestPrefix))
                : node;
        }

        protected override FragmentDefinitionNode RewriteFragmentDefinition(
            FragmentDefinitionNode node, bool first)
        {
            return _rewriteFragments
                ? base.RewriteFragmentDefinition(
                    node.WithName(node.Name.CreateNewName(_requestPrefix)),
                    false)
                : base.RewriteFragmentDefinition(node, false);
        }

        protected override VariableNode RewriteVariable(
            VariableNode node, bool first)
        {
            return IsAutoGenerated
                && _globalVariableNames.Contains(node.Name.Value)
                ? node
                : node.WithName(node.Name.CreateNewName(_requestPrefix));
        }
    }
}
