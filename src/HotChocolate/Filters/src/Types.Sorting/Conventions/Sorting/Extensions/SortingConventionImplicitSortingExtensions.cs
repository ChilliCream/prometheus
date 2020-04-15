using System;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;
using HotChocolate.Types.Descriptors;
using HotChocolate.Utilities;

namespace HotChocolate.Types.Sorting.Conventions
{
    public static class SortingConventionImplicitSortingExtensions
    {
        public static ISortingConventionDescriptor UseImplicitSorting(
            this ISortingConventionDescriptor descriptor)
        {
            return descriptor
                .AddImplicitSorting(TryCreateComparable)
                .AddImplicitSorting(TryCreateObject);
        }

        public static bool TryCreateComparable(
            IDescriptorContext context,
            Type type,
            PropertyInfo property,
            ISortingConvention convention,
            [NotNullWhen(true)] out SortOperationDefintion? definition)
        {
            definition = null;

            if (typeof(IComparable).IsAssignableFrom(type))
            {
                definition = SortOperationDescriptor
                    .CreateOperation(property, context, convention)
                    .CreateDefinition();
            }

            return definition != null;
        }

        public static bool TryCreateObject(
            IDescriptorContext context,
            Type type,
            PropertyInfo property,
            ISortingConvention convention,
            [NotNullWhen(true)] out SortOperationDefintion? definition)
        {
            definition = null;

            if (type.IsClass && !DotNetTypeInfoFactory.IsListType(type))
            {
                definition = SortObjectOperationDescriptor
                    .CreateOperation(property, context, convention)
                    .CreateDefinition();
            }

            return definition != null;
        }
    }
}
