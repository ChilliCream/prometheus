using System;
using System.Collections.Generic;
using System.Reflection;
using HotChocolate.Language;
using HotChocolate.Types.Descriptors.Definitions;
using System.Linq;
using HotChocolate.Types.Descriptors;
using System.Linq.Expressions;
using HotChocolate.Utilities;
using HotChocolate.Types.Filters.String;

namespace HotChocolate.Types.Filters
{
    public class FilterInputObjectTypeDescriptor<T>
        : DescriptorBase<InputObjectTypeDefinition>
        , IFilterInputObjectTypeDescriptor<T>
    {
        public FilterInputObjectTypeDescriptor(
            IDescriptorContext context,
            Type clrType)
            : base(context)
        {
            if (clrType == null)
            {
                throw new ArgumentNullException(nameof(clrType));
            }

            Definition.ClrType = clrType;
            Definition.Name = context.Naming.GetTypeName(
                clrType, TypeKind.InputObject);
            Definition.Description = context.Naming.GetTypeDescription(
                clrType, TypeKind.InputObject);
        }

        protected override InputObjectTypeDefinition Definition { get; } =
            new InputObjectTypeDefinition();

        protected List<FilterFieldDescriptorBase> Fields { get; } =
            new List<FilterFieldDescriptorBase>();

        protected override void OnCreateDefinition(
            InputObjectTypeDefinition definition)
        {
            var fields = new Dictionary<NameString, InputFieldDefinition>();
            var handledProperties = new HashSet<PropertyInfo>();
            
            FieldDescriptorUtilities.AddExplicitFields(
                Fields.SelectMany(x => x.CreateDefinitions()),
                f => f.Property,
                fields,
                handledProperties);
            

            OnCompleteFields(fields, handledProperties);

            Definition.Fields.AddRange(fields.Values);
        }

        protected virtual void OnCompleteFields(
            IDictionary<NameString, InputFieldDefinition> fields,
            ISet<PropertyInfo> handledProperties)
        {
           /*
            *  TODO: CLEANUP
            *  Do we even need this?
            * if (Definition.Fields.IsImplicitBinding())
            {
                FieldDescriptorUtilities.AddImplicitFields(
                    this,
                    p => InputFieldDescriptor
                        .New(Context, p)
                        .CreateDefinition(),
                    fields,
                    handledProperties);
            }
            */
        }

        public IStringFilterFieldDescriptor Filter(
            Expression<Func<T, string>> propertyOrMethod)
        {
            if (propertyOrMethod.ExtractMember() is PropertyInfo p)
            {
                var field = new StringFilterFieldsDescriptor(Context, p);
                Fields.Add(field);
                return field;
            }

            throw new ArgumentException(
                "Only properties are allowed for input types.",
                nameof(propertyOrMethod));
        }

        public IFilterInputObjectTypeDescriptor<T> BindFields(BindingBehavior bindingBehavior)
        {
            Definition.Fields.BindingBehavior = bindingBehavior;
            return this;
        }


        public static FilterInputObjectTypeDescriptor<T> New(
            IDescriptorContext context, Type clrType) =>
            new FilterInputObjectTypeDescriptor<T>(context, clrType);
    }
}
