﻿using System.Threading.Tasks;
using ChilliCream.Testing;
using HotChocolate.Execution;
using Xunit;

namespace HotChocolate
{
    public class SchemaFirstTests
    {
        [Fact]
        public async Task BindObjectTypeImplicit()
        {
            // arrange
            Schema schema = Schema.Create(
                @"
                type Query {
                    test: String
                    testProp: String
                }",
                c => c.BindType<Query>());

            // act
            IExecutionResult result =
                await schema.MakeExecutable().ExecuteAsync(
                    "{ test testProp }");

            // assert
            Assert.Empty(result.Errors);
            result.Snapshot();
        }

        [Fact]
        public async Task BindInputTypeImplicit()
        {
            // arrange
            Schema schema = Schema.Create(
                @"
                schema {
                    query: FooQuery
                }

                type FooQuery {
                    foo(bar: Bar): String
                }

                input Bar
                {
                    baz: String
                }",
                c =>
                {
                    c.BindType<FooQuery>();
                    c.BindType<Bar>();
                });

            // act
            IExecutionResult result =
                await schema.MakeExecutable().ExecuteAsync(
                    "{ foo(bar: { baz: \"hello\"}) }");

            // assert
            Assert.Empty(result.Errors);
            result.Snapshot();
        }

        [Fact]
        public async Task EnumAsOutputType()
        {
            // arrange
            Schema schema = Schema.Create(
                @"
                type Query {
                    enumValue: FooEnum
                }

                enum FooEnum {
                    BAR
                    BAZ
                }
                ",

                c => c.BindType<EnumQuery>().To("Query"));

            // act
            IExecutionResult result =
                await schema.MakeExecutable().ExecuteAsync(
                    "{ enumValue }");

            // assert
            Assert.Empty(result.Errors);
            result.Snapshot();
        }

        public class Query
        {
            public string GetTest()
            {
                return "Hello World 1!";
            }

            public string TestProp => "Hello World 2!";
        }

        public class FooQuery
        {
            public string GetFoo(Bar bar)
            {
                return bar.Baz;
            }
        }

        public class Bar
        {
            public string Baz { get; set; }
        }

        public class EnumQuery
        {
            public FooEnum GetEnumValue()
            {
                return FooEnum.Bar;
            }

            public string SetEnumValue(FooEnum value)
            {
                return value.ToString();
            }
        }

        public enum FooEnum
        {
            Bar,
            Baz
        }
    }
}
