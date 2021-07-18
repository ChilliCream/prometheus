---
title: "Relay"
---

TODO

[Learn more about the Relay GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification)

# Global Object Identification

TODO

[Learn more about Global Object Identification](https://graphql.org/learn/global-object-identification)

# Connections

TODO

[Learn more about Connections](/docs/hotchocolate/fetching-data/pagination#connections)

# Query field in Mutation payloads

It's a common best practice to return a payload type from mutations containing the affected entity as a field.

```sdl
type Mutation {
  likePost(id: ID!): LikePostPayload
}

type LikePostPayload {
  post: Post
}
```

This allows us to immediately use the affected entity in the client application responsible for the mutation.

Sometimes a mutation might also affect other parts of our application as well. Maybe the `likePost` mutation needs to update an Activity Feed.

For this scenario we can expose a `query` field on our payload type to allow the client application to fetch everything it needs to update its state in one round trip.

```sdl
type LikePostPayload {
  post: Post
  query: Query
}
```

A resulting mutation request could look like the following.

```graphql
mutation {
  likePost(id: 1) {
    post {
      id
      content
      likes
    }
    query {
      ...ActivityFeed_Fragment
    }
  }
}
```

Hot Chocolate allows us to automatically add this `query` field to all of our mutation payload types.

We can enable it like the following:

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services
            .AddGraphQLServer()
            .EnableRelaySupport(new RelayOptions
            {
                AddQueryFieldToMutationPayloads = true
            });
    }
}
```

By default this will add a new field called `query` to each type, whose name ends in `Payload`.

Of course these defaults can be tweaked:

```csharp
services
    .AddGraphQLServer()
    .EnableRelaySupport(new RelayOptions
    {
        AddQueryFieldToMutationPayloads = true,
        QueryFieldName = "rootQuery",
        MutationPayloadPredicate = (type) => type.Name.Value.EndsWith("Result")
    });
```

This would add a field of type `Query` with the name of `rootQuery` to each type, whose name ends in `Result`.

<!-- [Relay](https://facebook.github.io/relay) is a _JavaScript_ framework for building data-driven React applications with GraphQL which is developed and used by _Facebook_.

Relay makes three assumptions about the backend which you have to abide by in order that your GraphQL backend plays well with this framework.

We recommend that you abide to the relay server specifications even if you do not plan to use relay since even _Apollo_ supports these specifications and they are really good guidelines that lead to a better schema design.

# Object Identification

The first specification is called [Relay Global Object Identification Specification](https://facebook.github.io/relay/graphql/objectidentification.htm) and defines that object identifiers are specified in a standardized way. Moreover, it defines that all identifier is schema unique and that we can refetch any object just by providing that identifier.

In order to support the schema has to provide an interface `Node` that looks like following:

```sdl
interface Node {
  id: ID!
}
```

Each object that exposes an identifier has to implement `Node` and provide the `id` field.

Moreover, the `Query` type has to expose a field `node` that can return a node for an id.

```sdl
type Query {
  ...
  node(id: ID!) : Node
  ...
}
```

This allows now the client APIs to automatically refetch objects from the server if the client framework wants to update its caches or if it has part of the object in its store and wants to fetch additional fields of an object.

Hot Chocolate makes implementing this very easy. First, we have to declare on our schema that we want to be relay compliant:

```csharp
ISchema schema = SchemaBuilder.New()
    .EnableRelaySupport()
    ...
    .Create();
```

This basically sets up a middleware to encode out identifiers to be schema unique, so you do not have to provide schema unique identifiers. Moreover, it will add a `Node` interface type and configure the `node` field on our query type.

Lastly, we have to declare on our object types that they are nodes and how they can be resolved.

```csharp
public class MyObjectType
    : ObjectType<MyObject>
{
    protected override void Configure(IObjectTypeDescriptor<MyObject> descriptor)
    {
        descriptor.AsNode()
            .IdField(t => t.Id)
            .NodeResolver((ctx, id) =>
                ctx.Service<IMyRepository>().GetMyObjectAsync(id));
        ...
    }
}
```

On the descriptor we mark the object as a node with `AsNode` after that we specify the property that represents our internal identifier, last but not least we specify the node resolver that will fetch the node from the database when it is requested through the `node` field on the query type.

There are more variants possible and you can even write custom resolvers and do not have to bind to an explicit property.
 -->
