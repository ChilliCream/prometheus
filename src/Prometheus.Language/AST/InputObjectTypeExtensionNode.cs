using System;
using System.Collections.Generic;

namespace Prometheus.Language
{
    public class InputObjectTypeExtensionNode
        : ITypeExtensionNode
    {
        public InputObjectTypeExtensionNode(
            Location location, NameNode name, 
            IReadOnlyCollection<DirectiveNode> directives, 
            IReadOnlyCollection<InputValueDefinitionNode> fields)
        {
            if (name == null)
            {
                throw new ArgumentNullException(nameof(name));
            }

            if (directives == null)
            {
                throw new ArgumentNullException(nameof(directives));
            }

            if (fields == null)
            {
                throw new ArgumentNullException(nameof(fields));
            }

            Location = location;
            Name = name;
            Directives = directives;
            Fields = fields;
        }

        public NodeKind Kind { get; } = NodeKind.InputObjectTypeExtension;
        public Location Location { get; }
        public NameNode Name { get; }
        public IReadOnlyCollection<DirectiveNode> Directives { get; }
        public IReadOnlyCollection<InputValueDefinitionNode> Fields { get; }
    }
}