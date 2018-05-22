using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using HotChocolate.Language;
using HotChocolate.Resolvers;

namespace HotChocolate.Types
{
    public class Field
        : ITypeSystemNode
    {
        private readonly Func<IOutputType> _typeFactory;
        private readonly Func<FieldResolverDelegate> _resolverFactory;
        private IEnumerable<InputField> _arguments;
        private readonly Dictionary<string, InputField> _argumentMap =
            new Dictionary<string, InputField>();
        private IOutputType _type;
        private FieldResolverDelegate _resolver;

        public Field(FieldConfig config)
        {
            if (config == null)
            {
                throw new ArgumentNullException(nameof(config));
            }

            if (string.IsNullOrEmpty(config.Name))
            {
                throw new ArgumentException(
                    "A field name must not be null or empty.",
                    nameof(config));
            }

            if (config.Type == null)
            {
                throw new ArgumentException(
                    "A field type must not be null or empty.",
                    nameof(config));
            }

            _typeFactory = config.Type;
            _resolverFactory = config.Resolver;
            _arguments = config.Arguments;

            SyntaxNode = config.SyntaxNode;
            Name = config.Name;
            Description = config.Description;
            IsIntrospection = config.IsIntrospection;
            IsDeprecated = !string.IsNullOrEmpty(config.DeprecationReason);
            DeprecationReason = config.DeprecationReason;
        }

        public FieldDefinitionNode SyntaxNode { get; }

        public string Name { get; }

        public string Description { get; }

        internal bool IsIntrospection { get; }

        public bool IsDeprecated { get; }

        public string DeprecationReason { get; }

        public IOutputType Type { get; }

        public IReadOnlyDictionary<string, InputField> Arguments => _argumentMap;

        public FieldResolverDelegate Resolver => _resolver;

        #region TypeSystemNode

        ISyntaxNode IHasSyntaxNode.SyntaxNode => SyntaxNode;
        IEnumerable<ITypeSystemNode> ITypeSystemNode.GetNodes()
            => _argumentMap.Values;

        #endregion

        #region Initialization

        internal void CompleteInitialization(
            Action<SchemaError> reportError,
            INamedType parentType)
        {
            _type = _typeFactory();
            if (_type == null)
            {
                reportError(new SchemaError(
                    $"The type of field {Name} is null.",
                    parentType));
            }

            if (_arguments != null)
            {
                foreach (InputField argument in _arguments)
                {
                    if (_argumentMap.ContainsKey(argument.Name))
                    {
                        reportError(new SchemaError(
                            $"The field name of field {Name} " +
                            $"is not unique within {parentType.Name}.",
                            parentType));
                    }
                    else
                    {
                        argument.CompleteInitialization(reportError, parentType);
                        _argumentMap.Add(argument.Name, argument);
                    }
                }
            }

            if (parentType is ObjectType)
            {
                if (_resolverFactory == null)
                {
                    reportError(new SchemaError(
                        $"The field {Name} of object type {parentType.Name} " +
                        "has no resolver factory.", parentType));
                }
                else
                {
                    _resolver = _resolverFactory();
                    if (_resolver == null)
                    {
                        reportError(new SchemaError(
                            $"The field {Name} of object type {parentType.Name} " +
                            "has no resolver.", parentType));
                    }
                }
            }
        }

        #endregion
    }

    public class FieldConfig
    {
        public FieldDefinitionNode SyntaxNode { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        internal bool IsIntrospection { get; set; }

        public string DeprecationReason { get; set; }

        public Func<IOutputType> Type { get; set; }

        public IEnumerable<InputField> Arguments { get; set; }

        public Func<FieldResolverDelegate> Resolver { get; set; }
    }
}
