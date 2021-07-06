using System;
using System.Linq.Expressions;
using System.Reflection;
using HotChocolate.Language;

#nullable enable

namespace HotChocolate.Resolvers.Expressions.Parameters
{
    internal sealed class GetFieldSelectionCompiler : ResolverParameterCompilerBase
    {
        private readonly PropertyInfo _fieldSelection;

        public GetFieldSelectionCompiler()
        {
            _fieldSelection = PureContextType.GetProperty(nameof(IPureResolverContext.Selection))!;
        }

        public override bool CanHandle(
            ParameterInfo parameter,
            Type sourceType)
            => typeof(IFieldSelection).IsAssignableFrom(parameter.ParameterType);

        public override Expression Compile(
            Expression context,
            ParameterInfo parameter,
            Type sourceType)
            => Expression.Convert(
                Expression.Property(context, _fieldSelection),
                parameter.ParameterType);
    }
}
