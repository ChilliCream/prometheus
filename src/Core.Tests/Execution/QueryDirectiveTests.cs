using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate.Resolvers;
using HotChocolate.Runtime;
using HotChocolate.Types;
using Xunit;

namespace HotChocolate.Execution
{
    public class QueryDirectiveTests
    {
        [Fact]
        public void SingleDelegateMiddleware()
        {
            // arrange
            ISchema schema = CreateSchema();

            // act
            IExecutionResult result = schema.Execute(
                "{ sayHello @appendString(s: \"abc\") }");

            // assert
            Assert.Equal(Snapshot.Current(), Snapshot.New(result));
        }

        [Fact]
        public void SingleMethodMiddleware()
        {
            // arrange
            ISchema schema = CreateSchema();

            // act
            IExecutionResult result = schema.Execute(
                "{ sayHello @appendStringMethod(s: \"abc\") }");

            // assert
            Assert.Equal(Snapshot.Current(), Snapshot.New(result));
        }

        [Fact]
        public void SingleAsyncMethodMiddleware()
        {
            // arrange
            ISchema schema = CreateSchema();

            // act
            IExecutionResult result = schema.Execute(
                "{ sayHello @appendStringMethodAsync(s: \"abc\") }");

            // assert
            Assert.Equal(Snapshot.Current(), Snapshot.New(result));
        }

        [Fact]
        public void MiddlewarePipeline()
        {
            // arrange
            ISchema schema = CreateSchema();

            // act
            IExecutionResult result = schema.Execute(
                "{ sayHello @appendString(s: \"abc\") " +
                "@appendStringMethod(s: \"def\") " +
                "@appendStringMethodAsync(s: \"ghi\") }");

            // assert
            Assert.Equal(Snapshot.Current(), Snapshot.New(result));
        }

        public static ISchema CreateSchema()
        {
            return Schema.Create(c =>
            {
                c.RegisterCustomContext<Dictionary<string, string>>(
                    ExecutionScope.Request,
                    s => new Dictionary<string, string>());

                c.RegisterDirective<AppendStringDirectiveType>();
                c.RegisterDirective<AppendStringMethodDirectiveType>();
                c.RegisterDirective<AppendStringMethodAsyncDirectiveType>();

                c.RegisterQueryType<Query>();
            });
        }

        public class Query
        {
            public string SayHello()
            {
                return "Hello";
            }
        }

        public class AppendStringDirectiveType
            : DirectiveType
        {
            protected override void Configure(
                IDirectiveTypeDescriptor descriptor)
            {
                descriptor.Name("appendString");
                descriptor.Location(DirectiveLocation.Field);
                descriptor.Argument("s").Type<NonNullType<StringType>>();
                descriptor.Middleware(next => context =>
                {
                    context.Result = context.Result +
                        context.Directive.GetArgument<string>("s");
                    return next.Invoke(context);
                });
            }
        }

        public class AppendStringMethodDirectiveType
            : DirectiveType
        {
            protected override void Configure(
                IDirectiveTypeDescriptor descriptor)
            {
                descriptor.Name("appendStringMethod");
                descriptor.Location(DirectiveLocation.Field);
                descriptor.Argument("s").Type<NonNullType<StringType>>();
                descriptor.Middleware<AppendDirectiveMiddleware>(
                    t => t.AppendString(default, default));
            }
        }

        public class AppendStringMethodAsyncDirectiveType
            : DirectiveType
        {
            protected override void Configure(
                IDirectiveTypeDescriptor descriptor)
            {
                descriptor.Name("appendStringMethodAsync");
                descriptor.Location(DirectiveLocation.Field);
                descriptor.Argument("s").Type<NonNullType<StringType>>();
                descriptor.Middleware<AppendDirectiveMiddleware>(
                    t => t.AppendStringAsync(default, default));
            }
        }

        public class AppendDirectiveMiddleware
        {
            public string AppendString(
                [Result]string result,
                [DirectiveArgument]string s)
            {
                return result + s;
            }

            public Task<string> AppendStringAsync(
               [Result]string result,
               [DirectiveArgument]string s)
            {
                return Task.FromResult<string>(result + s);
            }
        }
    }
}
