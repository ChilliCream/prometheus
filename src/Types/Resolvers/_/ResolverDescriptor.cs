using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

namespace HotChocolate.Resolvers
{
    /// <summary>
    /// Describes a resolver that is based on a resolver type.
    /// </summary>
    internal class ResolverDescriptor
        : IFieldResolverDescriptor
    {
        public ResolverDescriptor(
            Type resolverType,
            Type sourceType,
            FieldMember field,
            IReadOnlyCollection<ArgumentDescriptor> arguments)
        {
            ResolverType = resolverType
                ?? throw new ArgumentNullException(nameof(resolverType));
            SourceType = sourceType
                ?? throw new ArgumentNullException(nameof(sourceType));
            Field = field
                ?? throw new ArgumentNullException(nameof(field));
            Arguments = arguments
                ?? throw new ArgumentNullException(nameof(arguments));

            if (field.Member is MethodInfo m)
            {
                IsAsync = typeof(Task).IsAssignableFrom(m.ReturnType);
                IsMethod = true;
            }
        }

        public Type ResolverType { get; }

        public Type SourceType { get; }

        public FieldMember Field { get; }

        public IReadOnlyCollection<ArgumentDescriptor> Arguments { get; }

        public bool IsAsync { get; }

        public bool IsMethod { get; }

        public bool IsProperty => IsMethod;
    }
}
