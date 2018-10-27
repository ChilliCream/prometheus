using System;
using HotChocolate.Execution;
using HotChocolate.Language;
using HotChocolate.Resolvers;
using HotChocolate.Types;

namespace HotChocolate.Integration.ArgumentValidation
{
    public static class ValidationExtensions
    {
        public static IArgumentDescriptor Validate<T>(
            this IArgumentDescriptor argumentDescriptor,
            Func<T, bool> func)
        {
            Action<IDirectiveContext, FieldNode, object> validator = (d, n, o) =>
            {
                bool isValid = false;
                if (o is T t)
                {
                    isValid = func(t);
                }

                if (!isValid)
                {
                    throw new QueryException(QueryError.CreateArgumentError(
                        "Argument is not valid.",
                        d.Path,
                        n,
                        ((InputField)d.Directive.Source).Name));
                }
            };

            return argumentDescriptor.Directive(
                new ArgumentValidationDirective { Validator = validator });
        }
    }
}
