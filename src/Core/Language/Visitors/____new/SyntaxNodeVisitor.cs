using System;
using System.Collections.Generic;
namespace HotChocolate.Language
{
    public class SyntaxNodeVisitor
        : ISyntaxNodeVisitor<DocumentNode>
        , ISyntaxNodeVisitor<OperationDefinitionNode>
        , ISyntaxNodeVisitor<VariableDefinitionNode>
        , ISyntaxNodeVisitor<SelectionSetNode>
        , ISyntaxNodeVisitor<FieldNode>
        , ISyntaxNodeVisitor<ArgumentNode>
        , ISyntaxNodeVisitor<FragmentSpreadNode>
        , ISyntaxNodeVisitor<InlineFragmentNode>
        , ISyntaxNodeVisitor<FragmentDefinitionNode>
        , ISyntaxNodeVisitor<DirectiveNode>
        , ISyntaxNodeVisitor<NamedTypeNode>
        , ISyntaxNodeVisitor<ListTypeNode>
        , ISyntaxNodeVisitor<NonNullTypeNode>
        , ISyntaxNodeVisitor<IValueNode>
        , ISyntaxNodeVisitor<ObjectValueNode>
        , ISyntaxNodeVisitor<ObjectFieldNode>
        , ISyntaxNodeVisitor<ListValueNode>
        , ISyntaxNodeVisitor<StringValueNode>
        , ISyntaxNodeVisitor<IntValueNode>
        , ISyntaxNodeVisitor<FloatValueNode>
        , ISyntaxNodeVisitor<BooleanValueNode>
        , ISyntaxNodeVisitor<EnumValueNode>
        , ISyntaxNodeVisitor<VariableNode>
        , ISyntaxNodeVisitor<SchemaDefinitionNode>
        , ISyntaxNodeVisitor<OperationTypeDefinitionNode>
        , ISyntaxNodeVisitor<ScalarTypeDefinitionNode>
        , ISyntaxNodeVisitor<ObjectTypeDefinitionNode>
        , ISyntaxNodeVisitor<FieldDefinitionNode>
        , ISyntaxNodeVisitor<InputValueDefinitionNode>
        , ISyntaxNodeVisitor<InterfaceTypeDefinitionNode>
        , ISyntaxNodeVisitor<UnionTypeDefinitionNode>
        , ISyntaxNodeVisitor<EnumTypeDefinitionNode>
        , ISyntaxNodeVisitor<EnumValueDefinitionNode>
        , ISyntaxNodeVisitor<InputObjectTypeDefinitionNode>
        , ISyntaxNodeVisitor<DirectiveDefinitionNode>
        , ISyntaxNodeVisitor<SchemaExtensionNode>
        , ISyntaxNodeVisitor<ScalarTypeExtensionNode>
        , ISyntaxNodeVisitor<ObjectTypeExtensionNode>
        , ISyntaxNodeVisitor<InterfaceTypeExtensionNode>
        , ISyntaxNodeVisitor<EnumTypeExtensionNode>
        , ISyntaxNodeVisitor<InputObjectTypeExtensionNode>
    {
        private readonly IReadOnlyDictionary<NodeKind, VisitorAction> _actions;
        private readonly VisitorAction _defaultAction;

        protected SyntaxNodeVisitor()
        {
            _actions = null;
            _defaultAction = VisitorAction.Skip;
        }

        protected SyntaxNodeVisitor(VisitorAction defaultAction)
        {
            _actions = null;
            _defaultAction = defaultAction;
        }

        protected SyntaxNodeVisitor(
            IReadOnlyDictionary<NodeKind, VisitorAction> actions,
            VisitorAction defaultAction)
        {
            _actions = actions;
            _defaultAction = defaultAction;
        }

        protected SyntaxNodeVisitor(
            IReadOnlyDictionary<NodeKind, VisitorAction> actions)
        {
            _actions = actions;
            _defaultAction = VisitorAction.Skip;
        }

        public virtual VisitorAction Enter(
            DocumentNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            DocumentNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            OperationDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            OperationDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            SelectionSetNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            SelectionSetNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            VariableDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            VariableDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            FieldNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            FieldNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            FragmentSpreadNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            FragmentSpreadNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            InlineFragmentNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            InlineFragmentNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ArgumentNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ArgumentNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            FragmentDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            FragmentDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            DirectiveNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            DirectiveNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            NamedTypeNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            NamedTypeNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ListTypeNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ListTypeNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            NonNullTypeNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            NonNullTypeNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            IValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            switch (node)
            {
                case ObjectValueNode ov:
                    return Enter(ov, parent, path, ancestors);
                case ListValueNode lv:
                    return Enter(lv, parent, path, ancestors);
                case StringValueNode sv:
                    return Enter(sv, parent, path, ancestors);
                case IntValueNode iv:
                    return Enter(iv, parent, path, ancestors);
                case FloatValueNode fv:
                    return Enter(fv, parent, path, ancestors);
                case BooleanValueNode fv:
                    return Enter(fv, parent, path, ancestors);
                case EnumValueNode ev:
                    return Enter(ev, parent, path, ancestors);
                case VariableNode vv:
                    return Enter(vv, parent, path, ancestors);
                default:
                    throw new NotSupportedException();
            }
        }

        public virtual VisitorAction Leave(
            IValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            switch (node)
            {
                case ObjectValueNode ov:
                    return Leave(ov, parent, path, ancestors);
                case ListValueNode lv:
                    return Leave(lv, parent, path, ancestors);
                case StringValueNode sv:
                    return Leave(sv, parent, path, ancestors);
                case IntValueNode iv:
                    return Leave(iv, parent, path, ancestors);
                case FloatValueNode fv:
                    return Leave(fv, parent, path, ancestors);
                case BooleanValueNode fv:
                    return Leave(fv, parent, path, ancestors);
                case EnumValueNode ev:
                    return Leave(ev, parent, path, ancestors);
                case VariableNode vv:
                    return Leave(vv, parent, path, ancestors);
                default:
                    throw new NotSupportedException();
            }
        }

        public virtual VisitorAction Enter(
            ObjectValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }
        public virtual VisitorAction Leave(
            ObjectValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ObjectFieldNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ObjectFieldNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ListValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ListValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

         public virtual VisitorAction Enter(
            StringValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            StringValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            IntValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            IntValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

         public virtual VisitorAction Enter(
            FloatValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            FloatValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

         public virtual VisitorAction Enter(
            BooleanValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            BooleanValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            EnumValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            EnumValueNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            VariableNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            VariableNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            InputObjectTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            InputObjectTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            EnumTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            EnumTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            InterfaceTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            InterfaceTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ScalarTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ScalarTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            DirectiveDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            DirectiveDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            EnumValueDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            EnumValueDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            UnionTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            UnionTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            InputValueDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            InputValueDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ObjectTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ObjectTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            OperationTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            OperationTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ScalarTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ScalarTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            SchemaDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            SchemaDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            FieldDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            FieldDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            InterfaceTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            InterfaceTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            EnumTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            EnumTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            InputObjectTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            InputObjectTypeDefinitionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            SchemaExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            SchemaExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Enter(
            ObjectTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }

        public virtual VisitorAction Leave(
            ObjectTypeExtensionNode node,
            ISyntaxNode parent,
            IReadOnlyList<object> path,
            IReadOnlyList<ISyntaxNode> ancestors)
        {
            return GetDefaultAction(node.Kind);
        }
        protected VisitorAction GetDefaultAction(NodeKind kind)
        {
            if (_actions != null
                && _actions.TryGetValue(kind, out VisitorAction action))
            {
                return action;
            }
            return _defaultAction;
        }
    }
}
