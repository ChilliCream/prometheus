using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using HotChocolate.Language;
using HotChocolate.Types.Descriptors;

namespace HotChocolate.Types.Filters.String.Contains
{
    public class StringFilterContainsDescriptor : InputFieldDescriptor, IStringFilterFieldDetailsDescriptor
    {
        private readonly IStringFilterFieldDescriptor parent;

        public StringFilterContainsDescriptor(IStringFilterFieldDescriptor parent, IDescriptorContext context, PropertyInfo property) : base(context, property)
        {
            this.parent = parent;
            Type<ListType<StringType>>();
            Definition.Name += "_contains";
            Definition.Property = null;
        }

        public IStringFilterFieldDescriptor And()
        {
            return parent;
        }

        public new IStringFilterFieldDetailsDescriptor Description(string value)
        {
            base.Description(value);
            return this;
        }

        public new IStringFilterFieldDetailsDescriptor Directive<T>(T directiveInstance)
            where T : class
        {
            base.Directive(directiveInstance);
            return this;
        }

        public new IStringFilterFieldDetailsDescriptor Directive<T>()
            where T : class, new()
        {
            base.Directive<T>();
            return this;
        }

        public new IStringFilterFieldDetailsDescriptor Directive(NameString name, params ArgumentNode[] arguments)
        {
            base.Directive(name, arguments);
            return this;
        }

        public new IStringFilterFieldDetailsDescriptor Name(NameString value)
        {
            base.Name(value);
            return this;
        }
    }
}
