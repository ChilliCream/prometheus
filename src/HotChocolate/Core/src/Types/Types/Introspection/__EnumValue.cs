#pragma warning disable IDE1006 // Naming Styles
using HotChocolate.Properties;

#nullable enable
namespace HotChocolate.Types.Introspection
{
    [Introspection]
    internal sealed class __EnumValue : ObjectType<IEnumValue>
    {
        protected override void Configure(
            IObjectTypeDescriptor<IEnumValue> descriptor)
        {
            descriptor
                .Name(Names.__EnumValue)
                .Description(TypeResources.EnumValue_Description)
                .BindFields(BindingBehavior.Explicit);

            descriptor
                .Field(c => c.Name)
                .Name(Names.Name)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(c => c.Description)
                .Name(Names.Description);

            descriptor
                .Field(c => c.IsDeprecated)
                .Name(Names.IsDeprecated)
                .Type<NonNullType<BooleanType>>();

            descriptor
                .Field(c => c.DeprecationReason)
                .Name(Names.DeprecationReason);
        }

        public static class Names
        {
            public const string __EnumValue = "__EnumValue";
            public const string Name = "name";
            public const string Description = "description";
            public const string IsDeprecated = "isDeprecated";
            public const string DeprecationReason = "DeprecationReason";
        }
    }
}
#pragma warning restore IDE1006 // Naming Styles
