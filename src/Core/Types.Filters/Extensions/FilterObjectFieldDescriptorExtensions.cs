using System;
using System.Threading.Tasks;
using HotChocolate.Resolvers;
using HotChocolate.Types.Descriptors;

namespace HotChocolate.Types.Filters
{
    public static class FilterObjectFieldDescriptorExtensions
    {
        public static IObjectFieldDescriptor<T> UseFilter<T>(
            this IObjectFieldDescriptor<T> descriptor)
        {
            if (descriptor is null)
            {
                throw new ArgumentNullException(nameof(descriptor));
            }

            Type filterType =
                typeof(FilterInputType<>).MakeGenericType(typeof(T));

            return UseFilter(descriptor, filterType);
        }

        public static IObjectFieldDescriptor UseFilter<T>(
            this IObjectFieldDescriptor descriptor)
        {
            if (descriptor is null)
            {
                throw new ArgumentNullException(nameof(descriptor));
            }

            Type filterType =
                typeof(IFilterInputType).IsAssignableFrom(typeof(T))
                    ? typeof(T)
                    : typeof(FilterInputType<>).MakeGenericType(typeof(T));

            return UseFilter(descriptor, filterType);
        }

        private static TDescriptor UseFilter<TDescriptor>(
            TDescriptor descriptor,
            Type filterType)
            where TDescriptor : IObjectFieldDescriptor
        {
            FieldMiddleware placeholder =
                next => context => Task.CompletedTask;
            Type middlewareDefinition = typeof(FilterMiddleware<>);

            descriptor
                .AddFilterArguments(filterType)
                .Use(placeholder)
                .Extend()
                .OnBeforeCompletion((context, defintion) =>
                {
                    var reference = new ClrTypeReference(
                        filterType,
                        TypeContext.Input);
                    IFilterInputType type =
                        context.GetType<IFilterInputType>(reference);
                    Type middlewareType = middlewareDefinition
                        .MakeGenericType(type.EntityType);
                    FieldMiddleware middleware =
                        FieldClassMiddlewareFactory.Create(middlewareType);
                    int index =
                        defintion.MiddlewareComponents.IndexOf(placeholder);
                    defintion.MiddlewareComponents[index] = middleware;
                })
                .DependsOn(filterType, mustBeCompleted: true);

            return descriptor;
        }

        private static IObjectFieldDescriptor AddFilterArguments(
            this IObjectFieldDescriptor descriptor,
            Type filterType)
        {
            return descriptor.Argument("where", a =>
                a.Extend().OnBeforeCreate(d =>
                    d.Type = new ClrTypeReference(
                        filterType, TypeContext.Input)));
        }

        public static IObjectFieldDescriptor AddFilterArguments<TFilter>(
            this IObjectFieldDescriptor descriptor)
            where TFilter : class, IInputType, IFilterInputType
        {
            return descriptor.Argument("where", a => a.Type<TFilter>());
        }

        public static IInterfaceFieldDescriptor AddFilterArguments<TFilter>(
            this IInterfaceFieldDescriptor descriptor)
            where TFilter : class, IInputType, IFilterInputType
        {
            return descriptor.Argument("where", a => a.Type<TFilter>());
        }
    }
}
