using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using HotChocolate.Configuration;
using HotChocolate.Internal;
using HotChocolate.Resolvers;
using HotChocolate.Types.Descriptors;
using HotChocolate.Types.Descriptors.Definitions;

#nullable enable

namespace HotChocolate.Types.Interceptors
{
    internal sealed class ResolverTypeInterceptor : TypeInterceptor
    {
        private readonly List<ITypeDefinition> _typeDefs = new();
        private readonly List<FieldResolverConfig> _fieldResolvers;
        private readonly List<(NameString, Type)> _resolverTypeList;
        private readonly Dictionary<NameString, Type> _runtimeTypes;
        private IDescriptorContext _context = default!;
        private INamingConventions _naming = default!;
        private ITypeInspector _typeInspector = default!;
        private IResolverCompiler _resolverCompiler = default!;
        private TypeReferenceResolver _typeReferenceResolver = default!;
        private ILookup<NameString, Type> _resolverTypes = default!;
        private ILookup<NameString, FieldResolverConfig> _configs = default!;

        public ResolverTypeInterceptor(
            List<FieldResolverConfig> fieldResolvers,
            List<(NameString, Type)> resolverTypes,
            Dictionary<NameString, Type> runtimeTypes)
        {
            _fieldResolvers = fieldResolvers;
            _resolverTypeList = resolverTypes;
            _runtimeTypes = runtimeTypes;
        }

        public override bool CanHandle(ITypeSystemObjectContext context) => true;

        internal override void InitializeContext(
            IDescriptorContext context,
            TypeReferenceResolver typeReferenceResolver)
        {
            _context = context;
            _naming = context.Naming;
            _typeInspector = context.TypeInspector;
            _resolverCompiler = context.ResolverCompiler;
            _typeReferenceResolver = typeReferenceResolver;
            _resolverTypes = _resolverTypeList.ToLookup(t => t.Item1, t => t.Item2);
            _configs = _fieldResolvers.ToLookup(t => t.Field.TypeName);
        }

        public override void OnAfterCompleteName(
            ITypeCompletionContext completionContext,
            DefinitionBase? definition,
            IDictionary<string, object?> contextData)
        {
            if (!completionContext.IsIntrospectionType &&
                completionContext.Type is IHasName namedType &&
                definition is ITypeDefinition typeDef)
            {
                if (typeDef.RuntimeType == typeof(object) &&
                    _runtimeTypes.TryGetValue(typeDef.Name, out Type? type))
                {
                    typeDef.RuntimeType = type;
                }

                typeDef.Name = namedType.Name;
                _typeDefs.Add(typeDef);
            }
        }

        public override void OnAfterCompleteTypeNames()
        {
            var context = new CompletionContext(_typeDefs);

            ApplyResolver(context);
            ApplySourceMembers(context);
        }

        private void ApplyResolver(CompletionContext context)
        {
            var completed = 0;

            foreach (ObjectTypeDefinition objectTypeDef in _typeDefs.OfType<ObjectTypeDefinition>())
            {
                if (_configs.Contains(objectTypeDef.Name))
                {
                    foreach (FieldResolverConfig config in _configs[objectTypeDef.Name])
                    {
                        context.resolvers[config.Field.FieldName] = config;
                    }

                    foreach (ObjectFieldDefinition field in objectTypeDef.Fields)
                    {
                        if (context.resolvers.TryGetValue(field.Name, out FieldResolverConfig conf))
                        {
                            field.Resolvers = conf.ToFieldResolverDelegates();
                            TrySetRuntimeType(context, field, conf);
                            completed++;
                        }
                    }

                    context.resolvers.Clear();
                }

                if (completed < objectTypeDef.Fields.Count)
                {
                    ApplyResolverTypes(context, objectTypeDef);
                }

                context.members.Clear();
            }
        }

        private void ApplyResolverTypes(
            CompletionContext context,
            ObjectTypeDefinition objectTypeDef)
        {
            CollectResolverMembers(objectTypeDef.Name, context.members);

            if (context.members.Count > 0)
            {
                foreach (ObjectFieldDefinition field in objectTypeDef.Fields)
                {
                    if (!field.Resolvers.HasResolvers &&
                        context.members.TryGetValue(field.Name, out MemberInfo? member))
                    {
                        field.ResolverMember = member;

                        field.Resolvers = _resolverCompiler.CompileResolve(
                            member,
                            objectTypeDef.RuntimeType,
                            resolverType: member.ReflectedType);

                        TrySetRuntimeTypeFromMember(field.Type, member);
                    }
                }
            }
        }

        private void ApplySourceMembers(CompletionContext context)
        {
            foreach (ITypeDefinition definition in
                _typeDefs.Where(t => t.RuntimeType != typeof(object)))
            {
                context.typesToAnalyze.Enqueue(definition);
            }

            while (context.typesToAnalyze.Count > 0)
            {
                switch (context.typesToAnalyze.Dequeue())
                {
                    case ObjectTypeDefinition objectTypeDef:
                        ApplyObjectSourceMembers(context, objectTypeDef);
                        break;

                    case InputObjectTypeDefinition inputTypeDef:
                        ApplyInputSourceMembers(context, inputTypeDef);
                        break;

                    case EnumTypeDefinition enumTypeDef:
                        ApplyEnumSourceMembers(context, enumTypeDef);
                        break;
                }
            }
        }

        private void ApplyObjectSourceMembers(
            CompletionContext context,
            ObjectTypeDefinition objectTypeDef)
        {
            var initialized = false;

            foreach (ObjectFieldDefinition field in objectTypeDef.Fields)
            {
                if (!initialized && field.Member is null)
                {
                    CollectSourceMembers(objectTypeDef.RuntimeType, context.members);
                    initialized = true;
                }

                if (field.Member is null &&
                    context.members.TryGetValue(field.Name, out MemberInfo? member))
                {
                    field.Member = member;
                }

                if (field.Member is not null && !field.Resolvers.HasResolvers)
                {
                    field.Resolvers = _resolverCompiler.CompileResolve(
                        field.Member,
                        objectTypeDef.RuntimeType);

                    if (TrySetRuntimeTypeFromMember(field.Type, field.Member) is { } updated)
                    {
                        context.typesToAnalyze.Enqueue(updated);
                    }
                }
            }

            context.members.Clear();
        }

        private void ApplyInputSourceMembers(
            CompletionContext context,
            InputObjectTypeDefinition inputTypeDef)
        {
            var initialized = false;

            foreach (InputFieldDefinition field in inputTypeDef.Fields)
            {
                if (!initialized && field.Property is null)
                {
                    CollectSourceMembers(inputTypeDef.RuntimeType, members);
                    initialized = true;
                }

                if (field.Property is null &&
                    members.TryGetValue(field.Name, out MemberInfo? member) &&
                    member is PropertyInfo property)
                {
                    field.Property = property;

                    if (TrySetRuntimeTypeFromMember(field.Type, property) is { } updated)
                    {
                        typesToAnalyze.Enqueue(updated);
                    }
                }
            }

            members.Clear();
        }

        private void ApplyEnumSourceMembers(
            EnumTypeDefinition enumTypeDef,
            Dictionary<NameString, (object, MemberInfo)> values,
            Dictionary<string, (object, MemberInfo)> valuesToName)
        {
            var initialized = false;

            foreach (EnumValueDefinition enumValue in enumTypeDef.Values)
            {
                if (!initialized && enumValue.Member is null)
                {
                    foreach (object value in _typeInspector.GetEnumValues(enumTypeDef.RuntimeType))
                    {
                        NameString name = _naming.GetEnumValueName(value);
                        MemberInfo? member = _typeInspector.GetEnumValueMember(enumTypeDef);
                        values.Add(name, (value, member!));
                        valuesToName.Add(value.ToString()!, (value, member!));
                    }
                    initialized = true;
                }

                (object Value, MemberInfo Member) info;
                if (enumValue.Member is null &&
                    (enumValue.BindTo is null && values.TryGetValue(enumValue.Name, out info) ||
                     enumValue.BindTo is { } b && valuesToName.TryGetValue(b, out info)))
                {
                    enumValue.RuntimeValue = info.Value;
                    enumValue.Member = info.Member;
                }

            }

            values.Clear();
        }

        private void CollectResolverMembers(CompletionContext context, NameString typeName)
        {
            if (!_resolverTypes.Contains(typeName))
            {
                return;
            }

            foreach (var resolverType in _resolverTypes[typeName])
            {
                CollectSourceMembers(context, resolverType);
            }
        }

        private void CollectSourceMembers(CompletionContext context, Type runtimeType)
        {
            foreach (var member in _typeInspector.GetMembers(runtimeType, false))
            {
                NameString name = _naming.GetMemberName(member, MemberKind.ObjectField);
                context.members[name] = member;
            }
        }

        private void TrySetRuntimeType(
            CompletionContext context,
            ObjectFieldDefinition field,
            FieldResolverConfig config)
        {
            if (config.ResultType != typeof(object) &&
                field.Type is not null &&
                _typeReferenceResolver.TryGetType(field.Type, out IType? type))
            {
                foreach (var typeDef in context.TypeDefs[type.NamedType().Name])
                {
                    if (typeDef.RuntimeType == typeof(object))
                    {
                        typeDef.RuntimeType = Unwrap(config.ResultType, type);
                    }
                }
            }
        }

        private IReadOnlyCollection<ITypeDefinition>? TrySetRuntimeTypeFromMember(
            CompletionContext context,
            ITypeReference? typeRef,
            MemberInfo member)
        {
            if (typeRef is not null && _typeReferenceResolver.TryGetType(typeRef, out IType? type))
            {
                List<ITypeDefinition>? updated = null;
                Type? runtimeType = null;

                foreach (var typeDef in context.TypeDefs[type.NamedType().Name])
                {
                    if (typeDef.RuntimeType == typeof(object))
                    {
                        updated ??= new List<ITypeDefinition>();
                        runtimeType ??= Unwrap(_typeInspector.GetReturnType(member), type);
                        typeDef.RuntimeType = runtimeType;
                        updated.Add(typeDef);
                    }
                }

                return updated;
            }

            return null;
        }

        private Type? Unwrap(Type resultType, IType type)
            => Unwrap(_context.TypeInspector.GetType(resultType), type);

        private Type? Unwrap(IExtendedType extendedType, IType type)
        {
            if (type.IsNonNullType())
            {
                return Unwrap(extendedType, type.InnerType());
            }

            if (type.IsListType())
            {
                if (extendedType.ElementType is null)
                {
                    return null;
                }

                return Unwrap(extendedType.ElementType, type.InnerType());
            }

            return extendedType.IsNullable
                ? _context.TypeInspector.ChangeNullability(extendedType, false).Source
                : extendedType.Source;
        }

        private class CompletionContext
        {
            public Dictionary<NameString, FieldResolverConfig> resolvers = new();
            public Dictionary<NameString, MemberInfo> members = new();
            public Dictionary<NameString, (object, MemberInfo)> values = new();
            public Dictionary<string, (object, MemberInfo)> valuesToName = new();
            public Queue<ITypeDefinition> typesToAnalyze = new();
            public ILookup<NameString, ITypeDefinition> TypeDefs;

            public CompletionContext(List<ITypeDefinition> typeDefs)
            {
                TypeDefs = typeDefs.ToLookup(t => t.Name);
            }
        }
    }
}