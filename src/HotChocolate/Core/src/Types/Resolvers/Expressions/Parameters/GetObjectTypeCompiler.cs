using System;
using System.Linq.Expressions;
using System.Reflection;
using HotChocolate.Types;

#nullable enable

namespace HotChocolate.Resolvers.Expressions.Parameters
{
    internal sealed class GetObjectTypeCompiler : ResolverParameterCompilerBase
    {
        private readonly PropertyInfo _objectType;

        public GetObjectTypeCompiler()
            => _objectType = ContextType.GetProperty(nameof(IResolverContext.ObjectType))!;

        public override bool CanHandle(
            ParameterInfo parameter,
            Type sourceType)
            => typeof(ObjectType) == parameter.ParameterType ||
               typeof(IObjectType) == parameter.ParameterType;

        public override Expression Compile(
            Expression context,
            ParameterInfo parameter,
            Type sourceType)
        {
            return typeof(ObjectType) == parameter.ParameterType
                ? Expression.Convert(Expression.Property(context, _objectType), typeof(ObjectType))
                : Expression.Property(context, _objectType);
        }
    }
}
