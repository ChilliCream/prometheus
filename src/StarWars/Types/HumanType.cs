using HotChocolate.Types;
using StarWars.Models;
using StarWars.Resolvers;

namespace StarWars.Types
{
    public class HumanType
        : ObjectType<Human>
    {
        protected override void Configure(IObjectTypeDescriptor<Human> descriptor)
        {
            descriptor.Interface<CharacterType>();

            descriptor.Field(t => t.Id)
                .Type<NonNullType<IdType>>();

            descriptor.Field<SharedResolvers>(r => r.GetCharacter(default, default))
                .Type<ListType<CharacterType>>()
                .Name("friends");

            descriptor.Field<SharedResolvers>(t => t.GetHeight(default, default));
        }
    }
}
