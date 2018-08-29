using System;
using System.Reflection;
using HotChocolate.Resolvers.CodeGeneration;

namespace HotChocolate.Resolvers
{
    public sealed class FieldReference
        : FieldReferenceBase
        , IEquatable<FieldReference>
    {
        public FieldReference(string typeName, string fieldName)
            : base(typeName, fieldName)
        {
        }

        public FieldReference WithTypeName(string typeName)
        {
            if (string.Equals(TypeName, typeName))
            {
                return this;
            }

            return new FieldReference(typeName, FieldName);
        }

        public FieldReference WithFieldName(string fieldName)
        {
            if (string.Equals(FieldName, fieldName))
            {
                return this;
            }

            return new FieldReference(TypeName, fieldName);
        }

        public FieldMember WithMember(MemberInfo member)
        {
            return new FieldMember(TypeName, FieldName, member);
        }

        public FieldResolver WithResolver(FieldResolverDelegate resolver)
        {
            return new FieldResolver(TypeName, FieldName, resolver);
        }

        public bool Equals(FieldReference other)
        {
            return base.IsEqualTo(other);
        }
    }
}
