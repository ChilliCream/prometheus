using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Threading;
using HotChocolate.Execution;
using HotChocolate.Language;
using HotChocolate.Types;

#nullable enable

namespace HotChocolate.Resolvers
{
    /// <summary>
    /// The resolver context represent the execution context for a specific
    /// field that is being resolved.
    /// </summary>
    public interface IResolverContext : IHasContextData
    {
        /// <summary>
        /// Gets the scoped request service provider.
        /// </summary>
        IServiceProvider Services { get; }

        /// <summary>
        /// Gets the GraphQL schema on which the query is executed.
        /// </summary>
        ISchema Schema { get; }

        /// <summary>
        /// Gets the root object type of the currently execution operation.
        /// </summary>
        ObjectType RootType { get; }

        /// <summary>
        /// Gets the object type on which the field resolver is being executed.
        /// </summary>
        ObjectType ObjectType { get; }

        /// <summary>
        /// Gets the field on which the field resolver is being executed.
        /// </summary>
        ObjectField Field { get; }

        /// <summary>
        /// Gets the parsed query document that is being executed.
        /// </summary>
        DocumentNode Document { get; }

        /// <summary>
        /// Gets the operation from the query that is being executed.
        /// </summary>
        OperationDefinitionNode Operation { get; }

        /// <summary>
        /// Gets the field selection for which a field resolver is
        /// being executed.
        /// </summary>
        FieldNode FieldSelection { get; }

        /// <summary>
        /// Gets the name that the field will have in the response map.
        /// </summary>
        /// <value></value>
        NameString ResponseName { get; }

        /// <summary>
        /// Gets the current execution path.
        /// </summary>
        Path Path { get; }

        /// <summary>
        /// The scoped context data dictionary can be used by middlewares and
        /// resolvers to store and retrieve data during execution scoped to the
        /// hierarchy
        /// </summary>
        IImmutableDictionary<string, object?> ScopedContextData { get; set; }

        /// <summary>
        /// The local context data dictionary can be used by middlewares and
        /// resolvers to store and retrieve data during execution scoped to the
        /// field
        /// </summary>
        IImmutableDictionary<string, object?> LocalContextData { get; set; }

        /// <summary>
        /// Gets access to the coerced variable values of the request.
        /// </summary>
        IVariableValueCollection Variables { get; }

        /// <summary>
        /// Notifies when the connection underlying this request is aborted
        /// and thus request operations should be cancelled.
        /// </summary>
        CancellationToken RequestAborted { get; }

        /// <summary>
        /// Gets the source value on which the resolver executes.
        /// </summary>
        /// <typeparam name="T">
        /// The type to which the result shall be casted.
        /// </typeparam>
        /// <returns>
        /// Returns the source value on which the resolver executes.
        /// </returns>
        [return: MaybeNull]
        T Source<T>();

        /// <summary>
        /// Gets the previous (parent) resolver result.
        /// </summary>
        /// <typeparam name="T">
        /// The type to which the result shall be casted.
        /// </typeparam>
        /// <returns>
        /// Returns the previous (parent) resolver result.
        /// </returns>
        [Obsolete("Use Source<T>().")]
        [return: MaybeNull]
        T Parent<T>();

        /// <summary>
        /// Gets a specific field argument.
        /// </summary>
        /// <param name="name">
        /// The argument name.
        /// </param>
        /// <typeparam name="T">
        /// The type to which the argument shall be casted to.
        /// </typeparam>
        /// <returns>
        /// Returns the value of the specified field argument.
        /// </returns>
        [Obsolete("Use ArgumentValue<T>(name) or " +
            "ArgumentLiteral<TValueNode>(name) or " + 
            "ArgumentOptional<T>(name).")]
        [return: MaybeNull]

        T Argument<T>(NameString name);

        /// <summary>
        /// Gets a specific field argument value.
        /// </summary>
        /// <param name="name">
        /// The argument name.
        /// </param>
        /// <typeparam name="T">
        /// The type to which the argument shall be casted to.
        /// </typeparam>
        /// <returns>
        /// Returns the value of the specified field argument as literal.
        /// </returns>
        T ArgumentValue<T>(NameString name);

        /// <summary>
        /// Gets a specific field argument as literal.
        /// </summary>
        /// <param name="name">
        /// The argument name.
        /// </param>
        /// <typeparam name="TValueNode">
        /// The type to which the argument shall be casted to.
        /// </typeparam>
        /// <returns>
        /// Returns the value of the specified field argument as literal.
        /// </returns>
        TValueNode ArgumentLiteral<TValueNode>(NameString name) where TValueNode : IValueNode;

        /// <summary>
        /// Gets a specific field argument as optional.
        /// </summary>
        /// <param name="name">
        /// The argument name.
        /// </param>
        /// <typeparam name="T">
        /// The type to which the argument shall be casted to.
        /// </typeparam>
        /// <returns>
        /// Returns the value of the specified field argument as optional.
        /// </returns>
        Optional<T> ArgumentOptional<T>(NameString name);

        /// <summary>
        /// Gets the value kind of a specific field argument.
        /// </summary>
        /// <param name="name">
        /// The argument name.
        /// </param>
        /// <returns>
        /// Returns the value kind of the specified field argument kind.
        /// </returns>
        ValueKind ArgumentKind(NameString name);

        /// <summary>
        /// Gets as required service from the dependency injection container.
        /// </summary>
        /// <typeparam name="T">
        /// The service type.
        /// </typeparam>
        /// <returns>
        /// Returns the specified service.
        /// </returns>
        T Service<T>();

        /// <summary>
        /// Gets as required service from the dependency injection container.
        /// </summary>
        /// <param name="service">The service type.</param>
        /// <returns>
        /// Returns the specified service.
        /// </returns>
        object Service(Type service);

        /// <summary>
        /// Gets a custom request property that was provided with the request.
        /// </summary>
        /// <typeparam name="T">
        /// The property value type.
        /// </typeparam>
        /// <returns>
        /// Returns the value of the custom request property.
        /// </returns>
        [return: MaybeNull]
        T CustomProperty<T>(string key);

        /// <summary>
        /// Gets a resolver object containing one or more resolvers.
        /// </summary>
        /// <typeparam name="T">
        /// The type of the resolver object.
        /// </typeparam>
        /// <returns>
        /// Returns a resolver object containing one or more resolvers.
        /// </returns>
        T Resolver<T>();

        /// <summary>
        /// Report a non-terminating resolver error to the execution engine.
        /// The error will be displayed in the errorsection with a reference to
        /// the field selection that is associated with the current
        /// resolver context.
        /// </summary>
        /// <param name="errorMessage">
        /// The error message.
        /// </param>
        void ReportError(string errorMessage);

        /// <summary>
        /// Report a non-terminating resolver error to the execution engine.
        /// The error will be displayed in the errorsection with a reference to
        /// the field selection that is associated with the current
        /// resolver context.
        /// </summary>
        /// <param name="errorMessage">
        /// The error message.
        /// </param>
        void ReportError(IError error);

        /// <summary>
        /// Collects the fields of the next level with the specified
        /// type context.
        /// </summary>
        /// <param name="typeContext">The object type context.</param>
        /// <returns>
        /// Returns the fields that would be selected if this resolver
        /// returns an object of the specified typeContext.
        /// </returns>
        IReadOnlyList<IFieldSelection> CollectFields(ObjectType typeContext);

        /// <summary>
        /// Collects the fields of a selection set with the specified
        /// type context.
        /// </summary>
        /// <param name="typeContext">The object type context.</param>
        /// <param name="selectionSet">
        /// The selection set that shall be analyzed.
        /// </param>
        /// <returns>
        /// Returns the fields that would be selected if this resolver
        /// returns an object of the specified typeContext.
        /// </returns>
        IReadOnlyList<IFieldSelection> CollectFields(
            ObjectType typeContext,
            SelectionSetNode selectionSet);

        /// <summary>
        /// Collects the fields of a selection set with the specified
        /// type context.
        /// </summary>
        /// <param name="typeContext">The object type context.</param>
        /// <param name="selectionSet">
        /// The selection set that shall be analyzed.
        /// </param>
        /// <param name="path">
        /// The field path.
        /// </param>
        /// <returns>
        /// Returns the fields that would be selected if this resolver
        /// returns an object of the specified typeContext.
        /// </returns>
        IReadOnlyList<IFieldSelection> CollectFields(
            ObjectType typeContext,
            SelectionSetNode selectionSet,
            Path path);

        /// <summary>
        /// Helper method to modify the scoped context data.
        /// </summary>
        void ModifyScopedContext(ModifyScopedContext modify);
    }
}
