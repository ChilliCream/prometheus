using System;
using Snapshooter.Xunit;
using Xunit;
using HotChocolate.Types;

namespace HotChocolate
{
    public class SchemaBuilderExtensionsTypeTests
    {
        [Fact]
        public void AddQueryTypeDesc_ConfigureIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(builder, (Action<IObjectTypeDescriptor>)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeDesc_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(null, t => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeDesc_ConfigureQueryType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            SchemaBuilderExtensions.AddQueryType(builder,
                t => t.Name("Foo").Field("bar").Resolver("result"));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddMutationTypeDesc_ConfigureIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder, (Action<IObjectTypeDescriptor>)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeDesc_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(null, t => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeDesc_ConfigureQueryType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddMutationType(builder,
                t => t.Name("Foo").Field("bar").Resolver("result"));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddSubscriptionTypeDesc_ConfigureIsNull_ArgNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder, (Action<IObjectTypeDescriptor>)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeDesc_BuilderIsNull_ArgNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(null, t => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeDesc_ConfigureQueryType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddSubscriptionType(builder,
                t => t.Name("Foo").Field("bar").Resolver("result"));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddQueryTypeDescT_ConfigureIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(builder,
                    (Action<IObjectTypeDescriptor<Foo>>)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeDescT_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType<Foo>(null, t => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeDescT_ConfigureQueryType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            SchemaBuilderExtensions.AddQueryType<Foo>(builder,
                t => t.Name("Foo").Field(f => f.Bar).Resolver("result"));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddMutationTypeDescT_ConfigureIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder,
                    (Action<IObjectTypeDescriptor<Foo>>)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeDescT_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType<Foo>(null, t => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeDescT_ConfigureQueryType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddMutationType<Foo>(builder,
                t => t.Name("Foo").Field(f => f.Bar).Resolver("result"));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddSubscriptionTypeDescT_ConfigureIsNull_ArgNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder,
                    (Action<IObjectTypeDescriptor<Foo>>)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeDescT_BuilderIsNull_ArgNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType<Foo>(null, t => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeDescT_ConfQueryType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddSubscriptionType<Foo>(builder,
                t => t.Name("Foo").Field(f => f.Bar).Resolver("result"));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddQueryTypeType_TypeIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(builder, (Type)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeType_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(null, typeof(FooType));

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeType_TypeIsFooType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            SchemaBuilderExtensions.AddQueryType(builder, typeof(FooType));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddMutationTypeType_TypeIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder, (Type)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeType_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(null, typeof(FooType));

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeType_TypeIsFooType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddMutationType(builder, typeof(FooType));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddSubscriptionTypeType_TypeIsNull_ArgNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder, (Type)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeType_BuilderIsNull_ArgNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(null, typeof(FooType));

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeType_TypeIsFooType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddSubscriptionType(
                builder, typeof(FooType));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddQueryTypeObjectType_TypeIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(builder, (ObjectType)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeObjectType_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddQueryType(null, new FooType());

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddQueryTypeObjectType_TypeIsFooType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            SchemaBuilderExtensions.AddQueryType(builder, new FooType());

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddMutationTypeObjectType_TypeIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder, (ObjectType)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeObjectType_BuilderIsNull_ArgNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(null, new FooType());

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddMutationTypeObjectType_TypeIsFooType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddMutationType(builder, new FooType());

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void AddSubscriptionTypeObjectType_TypeIsNull_ArgNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(builder, (ObjectType)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeObjType_BuilderIsNull_ArgNullException()
        {
            // arrange
            // act
            Action action = () => SchemaBuilderExtensions
                .AddMutationType(null, new FooType());

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddSubscriptionTypeObjType_TypeIsFooType_SchemaIsCreated()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddSubscriptionType(
                builder, new FooType());

            // assert
            builder.Create().ToString().MatchSnapshot();
        }

        [Fact]
        public void SetSchema_BuilderIsNull_ArgumentException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () =>
                SchemaBuilderExtensions.SetSchema<MySchema>(null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void SetSchema_TypeSchema_SchemaIsCreatedFromType()
        {
            // arrange
            var queryType = new ObjectType(t => t
                .Name("Query")
                .Field("foo")
                .Resolver("bar"));

            // act
            ISchema schema = SchemaBuilder.New()
                .SetSchema<MySchema>()
                .AddType(queryType)
                .Create();

            // assert
            Assert.Equal("Description",
                Assert.IsType<MySchema>(schema).Description);
        }

        [Fact]
        public void AddObjectType_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () =>
                SchemaBuilderExtensions.AddObjectType(
                    null, c => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddObjectType_ConfigureIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () =>
                SchemaBuilderExtensions.AddObjectType(
                    SchemaBuilder.New(), null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddObjectTypeT_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () =>
                SchemaBuilderExtensions.AddObjectType<Foo>(
                    null, c => { });

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddObjectTypeT_ConfigureIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () =>
                SchemaBuilderExtensions.AddObjectType<Foo>(
                    SchemaBuilder.New(), null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddDirectiveType_BuilderIsNull_ArgumentNullException()
        {
            // arrange
            // act
            Action action = () =>
                SchemaBuilderExtensions.AddDirectiveType(
                    null, typeof(MyDirective));

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddDirectiveType_TypeIsNull_ArgumentNullException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () =>
                SchemaBuilderExtensions.AddDirectiveType(builder, (Type)null);

            // assert
            Assert.Throws<ArgumentNullException>(action);
        }

        [Fact]
        public void AddDirectiveType_TypeIsDirectiveType_ArgumentException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () =>
                SchemaBuilderExtensions.AddDirectiveType(
                    builder, typeof(DirectiveType));

            // assert
            Assert.Throws<ArgumentException>(action);
        }

        [Fact]
        public void AddDirectiveType_TypeIsDirectiveTypeFoo_ArgumentException()
        {
            // arrange
            var builder = new SchemaBuilder();

            // act
            Action action = () =>
                SchemaBuilderExtensions.AddDirectiveType(
                    builder, typeof(DirectiveType<Foo>));

            // assert
            Assert.Throws<ArgumentException>(action);
        }

        [Fact]
        public void AddDirectiveType_TypeIsMyDirectiveType_SchemaIsValid()
        {
            // arrange
            var builder = new SchemaBuilder();
            builder.AddQueryType<QueryType>();

            // act
            SchemaBuilderExtensions.AddDirectiveType(
                builder, typeof(MyDirective));

            // assert
            builder.Create().ToString().MatchSnapshot();
        }



        public class QueryType
           : ObjectType
        {
            protected override void Configure(
                IObjectTypeDescriptor descriptor)
            {
                descriptor.Name("Query");
                descriptor.Field("foo").Type<StringType>().Resolver("bar");
            }
        }

        public class MutationType
            : ObjectType
        {
            protected override void Configure(
                IObjectTypeDescriptor descriptor)
            {
                descriptor.Name("Mutation");
                descriptor.Field("bar").Type<IntType>().Resolver(123);
            }
        }

        public class SubscriptionType
            : ObjectType
        {
            protected override void Configure(
                IObjectTypeDescriptor descriptor)
            {
                descriptor.Name("Subscription");
                descriptor.Field("onFoo").Type<IntType>().Resolver(123);
            }
        }

        public class FooType
            : ObjectType<Foo>
        {
            protected override void Configure(
                IObjectTypeDescriptor<Foo> descriptor)
            {
                descriptor.Field(t => t.Bar).Type<NonNullType<BarType>>();
            }
        }

        public class BarType
            : ObjectType<Bar>
        {
        }

        public class Foo
        {
            public Bar Bar { get; }
        }

        public class Bar
        {
            public string Baz { get; }
        }

        [GraphQLResolverOf(typeof(QueryType))]
        public class QueryResolverOnType
        {
            public string Baz { get; }
        }

        [GraphQLResolverOf("Query")]
        public class QueryResolverOnName
        {
            public string Baz { get; }
        }

        public class MySchema
            : Schema
        {
            protected override void Configure(ISchemaTypeDescriptor descriptor)
            {
                descriptor.Description("Description");
            }
        }

        public class MyEnumType
            : EnumType
        { }

        public class MyDirective
            : DirectiveType
        {
            protected override void Configure(
                IDirectiveTypeDescriptor descriptor)
            {
                descriptor.Name("my");
                descriptor.Location(DirectiveLocation.Field);
            }
        }
    }
}
