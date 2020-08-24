using System.Reflection;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using HotChocolate.Internal;

#nullable enable

namespace HotChocolate.Types.Descriptors
{
    /// <summary>
    /// The type inspector provides helpers to inspect .NET types and
    /// infer GraphQL type structures.
    /// </summary>
    public interface ITypeInspector
        : IConvention
    {
        /// <summary>
        /// Gets the resolver types from a possible object type.
        /// </summary>
        /// <param name="type">
        /// The possible object type.
        /// </param>
        /// <returns>
        /// Returns the associated resolver types.
        /// </returns>
        IEnumerable<Type> GetResolverTypes(Type type);

        /// <summary>
        /// Gets the relevant members of a object or input object.
        /// </summary>
        /// <param name="type">
        /// The type that represents the object type.
        /// </param>
        /// <returns>
        /// Returns the relevant members of a object or input object.
        /// </returns>
        IEnumerable<MemberInfo> GetMembers(Type type);

        /// <summary>
        /// Gets the field type reference from a <see cref="MemberInfo" />.
        /// </summary>
        /// <param name="member">
        /// The member from which the field type shall be extracted.
        /// </param>
        /// <param name="context">
        /// The context defines if the field has an input or output context.
        /// </param>
        /// <returns>
        /// Returns a type reference describing the type of the field.
        /// </returns>
        ITypeReference GetReturnTypeRef(MemberInfo member, TypeContext context);

        /// <summary>
        /// Gets the field type from a <see cref="MemberInfo" />.
        /// </summary>
        /// <param name="member">
        /// The member from which the field type shall be extracted.
        /// </param>
        /// <returns>
        /// Returns a type reference describing the type of the field.
        /// </returns>
        IExtendedType GetReturnType(MemberInfo member);

        /// <summary>
        /// Gets the field argument type reference from a <see cref="ParameterInfo" />.
        /// </summary>
        /// <param name="parameter">
        /// The parameter from which the argument type shall be extracted.
        /// </param>
        /// <returns>
        /// Returns a type reference describing the type of the argument.
        /// </returns>
        ITypeReference GetArgumentTypeRef(ParameterInfo parameter);

        /// <summary>
        /// Gets the field argument type from a <see cref="ParameterInfo" />.
        /// </summary>
        /// <param name="parameter">
        /// The parameter from which the argument type shall be extracted.
        /// </param>
        /// <returns>
        /// Returns a type reference describing the type of the argument.
        /// </returns>
        IExtendedType GetArgumentType(ParameterInfo parameter);

        /// <summary>
        /// Extracts the values of an enum type.
        /// </summary>
        /// <param name="enumType">
        /// The enum type.
        /// </param>
        /// <returns>
        /// Returns the extracted values of an enum type.
        /// </returns>
        IEnumerable<object> GetEnumValues(Type enumType);

        /// <summary>
        /// Gets the associated enum value member.
        /// </summary>
        /// <param name="value">
        /// The enum value.
        /// </param>
        /// <returns>
        /// Returns the associated enum value member.
        /// </returns>
        MemberInfo? GetEnumValueMember(object value);

        /// <summary>
        /// Extracts the named type from a type structure.
        /// </summary>
        /// <param name="type">The original type structure.</param>
        /// <returns>
        /// Returns the named type form a type structure.
        /// </returns>
        Type ExtractNamedType(Type type);

        /// <summary>
        /// Checks if the provided type is a schema type.
        /// </summary>
        /// <param name="type">
        /// The system type that shall be evaluated.
        /// </param>
        /// <returns>
        /// <c>true</c> if the provided type is a schema type.
        /// </returns>
        bool IsSchemaType(Type type);

        /// <summary>
        /// Applies the attribute configurations to the descriptor.
        /// </summary>
        /// <param name="context">
        /// The descriptor context.
        /// </param>
        /// <param name="descriptor">
        /// The descriptor to which the configuration shall be applied to.
        /// </param>
        /// <param name="attributeProvider">
        /// The attribute provider.
        /// </param>
        void ApplyAttributes(
            IDescriptorContext context,
            IDescriptor descriptor,
            ICustomAttributeProvider attributeProvider);

        /// <summary>
        /// Tries to extract a default value from a parameter.
        /// </summary>
        /// <param name="parameter">
        /// The parameter from which the default value shall be extracted.
        /// </param>
        /// <param name="defaultValue">
        /// The default value.
        /// </param>
        /// <returns>
        /// <c>true</c> if a default value was available.
        /// </returns>
        bool TryGetDefaultValue(
            ParameterInfo parameter,
            out object? defaultValue);

        /// <summary>
        /// Tries to extract a default value from a property.
        /// </summary>
        /// <param name="property">
        /// The property from which the default value shall be extracted.
        /// </param>
        /// <param name="defaultValue">
        /// The default value.
        /// </param>
        /// <returns>
        /// <c>true</c> if a default value was available.
        /// </returns>
        bool TryGetDefaultValue(
            PropertyInfo property,
            out object? defaultValue);

        IExtendedType RewriteNullability(
            IExtendedType type,
            params bool?[] nullable);

        
        IExtendedType ToExtendedType(Type type);

        /// <summary>
        /// Create a <see cref="ITypeInfo"/> from the given <paramref name="type"/>.
        /// </summary>
        /// <param name="type">
        /// 
        /// </param>
        /// <returns></returns>
        ITypeInfo CreateTypeInfo(Type type);

        /// <summary>
        /// Create a <see cref="ITypeInfo"/> from the given <paramref name="type"/>.
        /// </summary>
        /// <param name="type"></param>
        /// <returns>
        /// 
        /// 
        /// </returns>
        ITypeInfo CreateTypeInfo(IExtendedType type);

        /// <summary>
        /// Tries to create a <see cref="ITypeInfo"/> from the given <paramref name="type"/>.
        /// </summary>
        /// <param name="type">
        /// The system type from which the <see cref="ITypeInfo"/> shall be created.
        /// </param>
        /// <param name="typeInfo">
        /// The type info.
        /// </param>
        /// <returns>
        /// <c>true</c> if a type info could be created.
        /// </returns>
        bool TryCreateTypeInfo(
            Type type,
            [NotNullWhen(true)]out ITypeInfo? typeInfo);

        /// <summary>
        /// Tries to create a <see cref="ITypeInfo"/> from the given <paramref name="type"/>.
        /// </summary>
        /// <param name="type">
        /// The extended type from which the <see cref="ITypeInfo"/> shall be created.
        /// </param>
        /// <param name="typeInfo">
        /// The type info.
        /// </param>
        /// <returns>
        /// <c>true</c> if a type info could be created.
        /// </returns>
        bool TryCreateTypeInfo(
            IExtendedType type,
            [NotNullWhen(true)]out ITypeInfo? typeInfo);
    }
}
