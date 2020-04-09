using HotChocolate.Types;

namespace HotChocolate.Validation.Types
{
    public class AlienType
        : ObjectType<Alien>
    {
        protected override void Configure(IObjectTypeDescriptor<Alien> descriptor)
        {
            descriptor.Interface<SentientType>();
            descriptor.Field(t => t.Name).Type<NonNullType<StringType>>();
        }
    }
}
