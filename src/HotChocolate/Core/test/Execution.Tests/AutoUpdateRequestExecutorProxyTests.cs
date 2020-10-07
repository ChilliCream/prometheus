using System;
using System.Threading.Tasks;
using HotChocolate.StarWars;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace HotChocolate.Execution
{
    public class AutoUpdateRequestExecutorProxyTests
    {
        [Fact]
        public async Task Ensure_Executor_Is_Cached()
        {
            // arrange
            IRequestExecutorResolver resolver =
                new ServiceCollection()
                    .AddGraphQL()
                    .AddStarWarsRepositories()
                    .AddStarWarsTypes()
                    .Services
                    .BuildServiceProvider()
                    .GetRequiredService<IRequestExecutorResolver>();

            var innerProxy = new RequestExecutorProxy(resolver, Schema.DefaultName);

            // act
            var proxy = await AutoUpdateRequestExecutorProxy.CreateAsync(innerProxy);
            IRequestExecutor a = proxy.InnerExecutor;
            IRequestExecutor b = proxy.InnerExecutor;

            // assert
            Assert.Same(a, b);
        }

        [Fact]
        public async Task Ensure_Executor_Is_Correctly_Swapped_When_Evicted()
        {
            // arrange
            IRequestExecutorResolver resolver =
                new ServiceCollection()
                    .AddGraphQL()
                    .AddStarWarsRepositories()
                    .AddStarWarsTypes()
                    .Services
                    .BuildServiceProvider()
                    .GetRequiredService<IRequestExecutorResolver>();
            var evicted = false;
            var updated = false;

            var innerProxy = new RequestExecutorProxy(resolver, Schema.DefaultName);
            innerProxy.ExecutorEvicted += (sender, args) =>
            {
                evicted = true;
                updated = false;
            };
            innerProxy.ExecutorUpdated += (sender, args) => updated = true;

            var proxy = await AutoUpdateRequestExecutorProxy.CreateAsync(innerProxy);

            // act
            IRequestExecutor a = proxy.InnerExecutor;
            resolver.EvictRequestExecutor();
            IRequestExecutor b = proxy.InnerExecutor;

            // assert
            Assert.NotSame(a, b);
            Assert.True(evicted);
            Assert.True(updated);
        }

        [Fact]
        public async Task Ensure_Manual_Proxy_Is_Not_Null()
        {
            // arrange
            IRequestExecutorResolver resolver =
                new ServiceCollection()
                    .AddGraphQL()
                    .AddStarWarsRepositories()
                    .AddStarWarsTypes()
                    .Services
                    .BuildServiceProvider()
                    .GetRequiredService<IRequestExecutorResolver>();

            // act
            async Task Action() => await AutoUpdateRequestExecutorProxy.CreateAsync(null);

            // assert
            await Assert.ThrowsAsync<ArgumentNullException>(Action);
        }
    }
}
