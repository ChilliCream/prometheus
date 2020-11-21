using System.Threading.Tasks;
using HotChocolate.Execution;
using Xunit;

namespace HotChocolate.Data.Filters
{
    public class QueryableFilterVisitorBooleanTests
    {
        private static readonly Foo[] _fooEntities =
        {
            new Foo { Bar = true },
            new Foo { Bar = false }
        };

        private static readonly FooNullable[] _fooNullableEntities =
        {
            new FooNullable { Bar = true },
            new FooNullable { Bar = null },
            new FooNullable { Bar = false }
        };

        private readonly SchemaCache _cache = new SchemaCache();

        [Fact]
        public async Task Create_BooleanEqual_Expression()
        {
            // arrange
            IRequestExecutor tester = _cache.CreateSchema<Foo, FooFilterInput>(_fooEntities);

            // act
            // assert
            IExecutionResult res1 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { eq: true}}){ bar}}")
                    .Create());

            res1.MatchSqlSnapshot("true");

            IExecutionResult res2 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { eq: false}}){ bar}}")
                    .Create());

            res2.MatchSqlSnapshot("false");
        }

        [Fact]
        public async Task Create_BooleanNotEqual_Expression()
        {
            // arrange
            IRequestExecutor tester = _cache.CreateSchema<Foo, FooFilterInput>(_fooEntities);

            // act
            // assert
            IExecutionResult res1 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { neq: true}}){ bar}}")
                    .Create());

            res1.MatchSqlSnapshot("true");

            IExecutionResult res2 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { neq: false}}){ bar}}")
                    .Create());

            res2.MatchSqlSnapshot("false");
        }

        [Fact]
        public async Task Create_NullableBooleanEqual_Expression()
        {
            // arrange
            IRequestExecutor? tester = _cache.CreateSchema<FooNullable, FooNullableFilterInput>(
                _fooNullableEntities);

            // act
            // assert
            IExecutionResult res1 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { eq: true}}){ bar}}")
                    .Create());

            res1.MatchSqlSnapshot("true");

            IExecutionResult res2 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { eq: false}}){ bar}}")
                    .Create());

            res2.MatchSqlSnapshot("false");

            IExecutionResult res3 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { eq: null}}){ bar}}")
                    .Create());

            res3.MatchSqlSnapshot("null");
        }

        [Fact]
        public async Task Create_NullableBooleanNotEqual_Expression()
        {
            // arrange
            IRequestExecutor tester = _cache.CreateSchema<FooNullable, FooNullableFilterInput>(
                _fooNullableEntities);

            // act
            // assert
            IExecutionResult res1 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { neq: true}}){ bar}}")
                    .Create());

            res1.MatchSqlSnapshot("true");

            IExecutionResult res2 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { neq: false}}){ bar}}")
                    .Create());

            res2.MatchSqlSnapshot("false");

            IExecutionResult res3 = await tester.ExecuteAsync(
                QueryRequestBuilder.New()
                    .SetQuery("{ root(where: { bar: { neq: null}}){ bar}}")
                    .Create());

            res3.MatchSqlSnapshot("null");
        }

        public class Foo
        {
            public int Id { get; set; }

            public bool Bar { get; set; }
        }

        public class FooNullable
        {
            public int Id { get; set; }

            public bool? Bar { get; set; }
        }

        public class FooFilterInput
            : FilterInputType<Foo>
        {
        }

        public class FooNullableFilterInput
            : FilterInputType<FooNullable>
        {
        }
    }
}
