using System;
using System.Collections.Generic;
using System.Linq;
using HotChocolate.Types;

namespace HotChocolate.Internal
{
    internal static class BaseTypes
    {
        private static HashSet<Type> _baseTypes = new HashSet<Type>
        {
            typeof(ScalarType),
            typeof(InputObjectType),
            typeof(InputObjectType<>),
            typeof(ObjectType),
            typeof(ObjectType<>),
            typeof(EnumType),
            typeof(EnumType<>),
            typeof(InterfaceType),
            typeof(UnionType)
        };

        public static bool IsBaseType(Type type)
        {
            if (_baseTypes.Contains(type)
                || (type.IsGenericType
                    && _baseTypes.Contains(
                        type.GetGenericTypeDefinition())))
            {
                return true;
            }
            return false;
        }

        public static bool IsSchemaType<T>()
        {
            return IsSchemaType(typeof(T));
        }

        public static bool IsSchemaType(Type type)
        {
            foreach (Type baseType in _baseTypes)
            {
                if (baseType.IsAssignableFrom(type))
                {
                    return true;
                }
            }

            if (type.IsGenericType)
            {
                Type typeDefinition = type.GetGenericTypeDefinition();
                return typeDefinition == typeof(ListType<>) || typeDefinition == typeof(NonNullType<>);
            }

            return false;
        }

        public static bool IsNonGenericBaseType(Type type)
        {
            if (_baseTypes.Contains(type))
            {
                return true;
            }
            return false;
        }
    }
}
