using System;
using System.Linq.Expressions;

namespace HotChocolate.Configuration
{
    internal class BindResolverDelegate
        : IBindResolverDelegate
    {
        private readonly ResolverDelegateBindingInfo _bindingInfo;

        public BindResolverDelegate(ResolverDelegateBindingInfo bindingInfo)
        {
            if (bindingInfo == null)
            {
                throw new ArgumentNullException(nameof(bindingInfo));
            }
            _bindingInfo = bindingInfo;
        }

        public void To(string typeName, string fieldName)
        {
            _bindingInfo.ObjectTypeName = typeName;
            _bindingInfo.FieldName = fieldName;
        }

        public void To<TObjectType>(Expression<Func<TObjectType, object>> resolver)
        {
            _bindingInfo.ObjectType = typeof(TObjectType);
            _bindingInfo.FieldMember = resolver.ExtractMember();
        }
    }
}
