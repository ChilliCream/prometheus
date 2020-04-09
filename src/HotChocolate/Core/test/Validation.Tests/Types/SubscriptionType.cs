﻿using HotChocolate.Types;

namespace HotChocolate.Validation.Types
{
    public class SubscriptionType
        : ObjectType
    {
        protected override void Configure(IObjectTypeDescriptor descriptor)
        {
            descriptor.Name("Subscription");

            descriptor.Field("newMessage")
                .Type<NonNullType<MessageType>>()
                .Resolver(() => "foo");
        }
    }
}
