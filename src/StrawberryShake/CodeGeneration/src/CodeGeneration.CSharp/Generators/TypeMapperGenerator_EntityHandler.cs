using System;
using System.Collections.Generic;
using HotChocolate;
using StrawberryShake.CodeGeneration.CSharp.Builders;
using static StrawberryShake.CodeGeneration.NamingConventions;
using static StrawberryShake.CodeGeneration.Utilities.NameUtils;

namespace StrawberryShake.CodeGeneration.CSharp
{
    public partial class TypeMapperGenerator
    {
        private const string _entityId = "entityId";

        private void AddEntityHandler(
            ClassBuilder classBuilder,
            ConstructorBuilder constructorBuilder,
            MethodBuilder method,
            ComplexTypeDescriptor complexTypeDescriptor,
            HashSet<string> processed,
            bool isNonNullable)
        {
            method
                .AddParameter(_entityId)
                .SetType(TypeNames.EntityId.MakeNullable(!isNonNullable));

            if (!isNonNullable)
            {
                method.AddCode(EnsureProperNullability(_entityId, isNonNullable));
            }

            if (complexTypeDescriptor is InterfaceTypeDescriptor interfaceTypeDescriptor)
            {
                foreach (ObjectTypeDescriptor implementee in interfaceTypeDescriptor.ImplementedBy)
                {
                    NameString dataMapperName =
                        CreateEntityMapperName(implementee.RuntimeType.Name, implementee.Name);

                    if (processed.Add(dataMapperName))
                    {
                        var dataMapperType =
                            TypeNames.IEntityMapper.WithGeneric(
                                CreateEntityTypeName(implementee.Name),
                                implementee.RuntimeType.Name);

                        AddConstructorAssignedField(
                            dataMapperType,
                            GetFieldName(dataMapperName),
                            classBuilder,
                            constructorBuilder);
                    }

                    method.AddCode(GenerateEntityHandlerIfClause(implementee, isNonNullable));
                }
            }

            method.AddCode(ExceptionBuilder.New(TypeNames.NotSupportedException));
        }

        private static ICode GenerateEntityHandlerIfClause(
            ObjectTypeDescriptor objectTypeDescriptor,
            bool isNonNullable)
        {
            var dataMapperName =
                GetFieldName(
                    CreateEntityMapperName(
                        objectTypeDescriptor.RuntimeType.Name,
                        objectTypeDescriptor.Name));

            MethodCallBuilder constructorCall = MethodCallBuilder
                .New()
                .SetReturn()
                .SetWrapArguments()
                .SetMethodName(dataMapperName, nameof(IEntityMapper<object, object>.Map));

            MethodCallBuilder argument = MethodCallBuilder
                .Inline()
                .SetMethodName(StoreFieldName, nameof(IEntityStore.GetEntity))
                .AddGeneric(CreateEntityTypeName(objectTypeDescriptor.Name))
                .AddArgument(isNonNullable ? _entityId : $"{_entityId}.Value");

            constructorCall.AddArgument(
                NullCheckBuilder
                    .New()
                    .SetDetermineStatement(false)
                    .SetCondition(argument)
                    .SetCode(ExceptionBuilder.Inline(TypeNames.GraphQLClientException)));


            IfBuilder ifCorrectType = IfBuilder
                .New()
                .AddCode(constructorCall)
                .SetCondition(
                    MethodCallBuilder
                        .Inline()
                        .SetMethodName(
                            isNonNullable
                                ? new[]
                                {
                                    _entityId,
                                    nameof(EntityId.Name),
                                    nameof(string.Equals)
                                }
                                : new[]
                                {
                                    _entityId,
                                    nameof(Nullable<EntityId>.Value),
                                    nameof(EntityId.Name),
                                    nameof(string.Equals)
                                })
                        .AddArgument(objectTypeDescriptor.Name.AsStringToken())
                        .AddArgument(TypeNames.OrdinalStringComparison));

            return CodeBlockBuilder
                .New()
                .AddEmptyLine()
                .AddCode(ifCorrectType);
        }
    }
}
