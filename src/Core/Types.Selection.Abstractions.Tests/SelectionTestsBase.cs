using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using HotChocolate.Execution;
using HotChocolate.Resolvers;
using HotChocolate.Types.Relay;
using Xunit;

namespace HotChocolate.Types.Selections
{
    public abstract class SelectionTestsBase
    {
        private readonly static Foo[] SAMPLE =
            new[] {
                Foo.Create("aa", 1),
                Foo.Create("bb", 2) };

        private readonly IResolverProvider _provider;

        protected SelectionTestsBase(IResolverProvider provider)
        {
            _provider = provider;
        }

        [Fact]
        public virtual void Execute_Selection_Fragment()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { ...test  } } fragment test on Foo { bar baz}");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Equal("aa", x.Bar);
                    Assert.Equal(1, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bb", x.Bar);
                    Assert.Equal(2, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Scalar()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { bar } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Equal("aa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bb", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_MultipleScalar()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { bar baz } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Equal("aa", x.Bar);
                    Assert.Equal(1, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bb", x.Bar);
                    Assert.Equal(2, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Object()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { nested { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.NotNull(x.Nested);
                    Assert.Equal("nestedaa", x.Nested.Bar);
                    Assert.Equal(0, x.Nested.Baz);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.NotNull(x.Nested);
                    Assert.Equal("nestedbb", x.Nested.Bar);
                    Assert.Equal(0, x.Nested.Baz);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Array()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
               "{ foos { objectArray { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ObjectArray);
                    Assert.Equal("objectArrayaa", x.ObjectArray[0].Bar);
                    Assert.Equal(0, x.ObjectArray[0].Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ObjectArray);
                    Assert.Equal("objectArraybb", x.ObjectArray[0].Bar);
                    Assert.Equal(0, x.ObjectArray[0].Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_List()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { objectList { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ObjectList);
                    Assert.Equal("objectListaa", x.ObjectList[0].Bar);
                    Assert.Equal(0, x.ObjectList[0].Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ObjectList);
                    Assert.Equal("objectListbb", x.ObjectList[0].Bar);
                    Assert.Equal(0, x.ObjectList[0].Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_List_Interface()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { iObjectList { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.IObjectList);
                    Assert.Equal("iListaa", x.IObjectList[0].Bar);
                    Assert.Equal(0, x.IObjectList[0].Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.IObjectList);
                    Assert.Equal("iListbb", x.IObjectList[0].Bar);
                    Assert.Equal(0, x.IObjectList[0].Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Set_Interface()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { iSet { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ISet);
                    Assert.Equal("iSetaa", x.ISet.First().Bar);
                    Assert.Equal(0, x.ISet.First().Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ISet);
                    Assert.Equal("iSetbb", x.ISet.First().Bar);
                    Assert.Equal(0, x.ISet.First().Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Set()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { hashSet { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.HashSet);
                    Assert.Equal("hashSetaa", x.HashSet.First().Bar);
                    Assert.Equal(0, x.HashSet.First().Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.HashSet);
                    Assert.Equal("hashSetbb", x.HashSet.First().Bar);
                    Assert.Equal(0, x.HashSet.First().Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_SortedSet()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { sortedSet { bar } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.SortedSet);
                    Assert.Equal("sortedSetaa", x.SortedSet.First().Bar);
                    Assert.Equal(0, x.SortedSet.First().Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.SortedSet);
                    Assert.Equal("sortedSetbb", x.SortedSet.First().Bar);
                    Assert.Equal(0, x.SortedSet.First().Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_ObjectDeep()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { nested { nested { nested { nested { bar } } } } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.NotNull(x.Nested);
                    Assert.Equal(0, x.Nested.Baz);
                    Assert.Null(x.ObjectArray);
                    Assert.Null(x.Nested.ObjectArray);
                    Assert.Null(x.Nested.Nested.Bar);
                    Assert.Null(x.Nested.Nested.Nested.Bar);
                    Assert.Equal("recursiveaa", x.Nested.Nested.Nested.Nested.Bar);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.NotNull(x.Nested);
                    Assert.Equal(0, x.Nested.Baz);
                    Assert.Null(x.ObjectArray);
                    Assert.Null(x.Nested.ObjectArray);
                    Assert.Null(x.Nested.Nested.Bar);
                    Assert.Null(x.Nested.Nested.Nested.Bar);
                    Assert.Equal("recursivebb", x.Nested.Nested.Nested.Nested.Bar);
                });
        }

        [Fact]
        public virtual void Execute_Selection_ArrayDeep()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            executor.Execute(
                "{ foos { objectArray { objectArray { objectArray { bar }  }  } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray(),
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ObjectArray);
                    Assert.Null(x.ObjectArray[0].Bar);
                    Assert.Null(x.ObjectArray[0].ObjectArray[0].Bar);
                    Assert.Equal(
                        "recursiveaa",
                        x.ObjectArray[0].ObjectArray[0].ObjectArray[0].Bar);
                    Assert.Equal(0, x.ObjectArray[0].Baz);
                },
                x =>
                {
                    Assert.Null(x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Single(x.ObjectArray);
                    Assert.Null(x.ObjectArray[0].Bar);
                    Assert.Null(x.ObjectArray[0].ObjectArray[0].Bar);
                    Assert.Equal(
                        "recursivebb",
                        x.ObjectArray[0].ObjectArray[0].ObjectArray[0].Bar);
                    Assert.Equal(0, x.ObjectArray[0].Baz);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Object_Paging_Nodes()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            Connection<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as Connection<Foo>;
                        })
                        .UsePaging<ObjectType<Foo>>()
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos { nodes { nested { bar } } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.Edges.ToArray(),
                x =>
                {
                    Assert.Null(x.Node.Bar);
                    Assert.Equal(0, x.Node.Baz);
                    Assert.NotNull(x.Node.Nested);
                    Assert.Equal("nestedaa", x.Node.Nested.Bar);
                    Assert.Equal(0, x.Node.Nested.Baz);
                    Assert.Null(x.Node.ObjectArray);
                },
                x =>
                {
                    Assert.Null(x.Node.Bar);
                    Assert.Equal(0, x.Node.Baz);
                    Assert.NotNull(x.Node.Nested);
                    Assert.Equal("nestedbb", x.Node.Nested.Bar);
                    Assert.Equal(0, x.Node.Nested.Baz);
                    Assert.Null(x.Node.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Object_Paging_Edges()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            Connection<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as Connection<Foo>;
                        })
                        .UsePaging<ObjectType<Foo>>()
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos { edges { node { bar }} } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.Edges.ToArray(),
                x =>
                {
                    Assert.Equal("aa", x.Node.Bar);
                    Assert.Equal(0, x.Node.Baz);
                    Assert.Null(x.Node.Nested);
                    Assert.Null(x.Node.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bb", x.Node.Bar);
                    Assert.Equal(0, x.Node.Baz);
                    Assert.Null(x.Node.Nested);
                    Assert.Null(x.Node.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Object_Paging_Combined()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            Connection<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as Connection<Foo>;
                        })
                        .UsePaging<ObjectType<Foo>>()
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos { nodes { nested { bar } } edges { node { bar }} } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.Edges.ToArray(),
                x =>
                {
                    Assert.Equal("aa", x.Node.Bar);
                    Assert.Equal(0, x.Node.Baz);
                    Assert.NotNull(x.Node.Nested);
                    Assert.Equal("nestedaa", x.Node.Nested.Bar);
                    Assert.Equal(0, x.Node.Nested.Baz);
                    Assert.Null(x.Node.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bb", x.Node.Bar);
                    Assert.Equal(0, x.Node.Baz);
                    Assert.NotNull(x.Node.Nested);
                    Assert.Equal("nestedbb", x.Node.Nested.Bar);
                    Assert.Equal(0, x.Node.Nested.Baz);
                    Assert.Null(x.Node.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_DeepPaging()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos   { middlewareList { nodes { bar } } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray()[0].MiddlewareList,
                x =>
                {
                    Assert.Equal("aa", x.Bar.Substring(2));
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("aa", x.Bar.Substring(2));
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("aa", x.Bar.Substring(2));
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Nested_Filtering()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos   { middlewareList(where:{bar: \"ccaa\"}) { nodes { bar } } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Single(resultCtx.ToArray()[0].MiddlewareList);
            Assert.Collection(resultCtx.ToArray()[0].MiddlewareList,
                x =>
                {
                    Assert.Equal("ccaa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Nested_Sorting()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos   { middlewareList(order_by:{baz: ASC, bar: ASC}) { nodes { bar } } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray()[0].MiddlewareList,
                x =>
                {
                    Assert.Equal("aaaa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("ccaa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bbaa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        [Fact]
        public virtual void Execute_Selection_Nested_FilteringAndSorting()
        {
            // arrange
            IServiceCollection services;
            Func<IResolverContext, IEnumerable<Foo>> resolver;
            (services, resolver) = _provider.CreateResolver(SAMPLE);

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddServices(services.BuildServiceProvider())
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(resolver)
                        .Use(next => async ctx =>
                        {
                            await next(ctx).ConfigureAwait(false);
                            resultCtx = ctx.Result as IQueryable<Foo>;
                        })
                        .UseFiltering()
                        .UseSorting()
                        .UseSelection())
                .Create();
            IQueryExecutor executor = schema.MakeExecutable();

            // act
            IExecutionResult result = executor.Execute(
                "{ foos   { middlewareList(where: {bar_in:[\"aaaa\",\"bbaa\"]}, " +
                "order_by:{baz: ASC, bar: ASC}) { nodes { bar } } } }");

            // assert
            Assert.NotNull(resultCtx);
            Assert.Collection(resultCtx.ToArray()[0].MiddlewareList,
                x =>
                {
                    Assert.Equal("aaaa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                },
                x =>
                {
                    Assert.Equal("bbaa", x.Bar);
                    Assert.Equal(0, x.Baz);
                    Assert.Null(x.Nested);
                    Assert.Null(x.ObjectArray);
                });
        }

        public class Query
        {
            public IQueryable<Foo> Foos { get; }
        }

        public class Foo
        {
            [Key]
            public Guid Id { get; set; }

            public string Bar { get; set; }

            public int Baz { get; set; }

            public NestedFoo Nested { get; set; }

            public NestedFoo[] ObjectArray { get; set; }

            public List<NestedFoo> ObjectList { get; set; }

            public IList<NestedFoo> IObjectList { get; set; }

            public HashSet<NestedFoo> HashSet { get; set; }

            public SortedSet<NestedFoo> SortedSet { get; set; }

            public ISet<NestedFoo> ISet { get; set; }

            [UsePaging]
            [UseFiltering]
            [UseSorting]
            public List<NestedFoo> MiddlewareList { get; set; }

            public static Foo Create(string bar, int baz)
            {
                var recursive = new NestedFoo()
                {
                    Bar = "recursive" + bar,
                    Baz = 10
                };
                var recursive2 = new NestedFoo()
                {
                    Bar = "recursive" + bar,
                    Baz = 10
                };
                for (var level = 0; level < 10; level++)
                {
                    recursive = new NestedFoo()
                    {
                        Bar = "recursive" + bar,
                        Baz = 10,
                        Nested = recursive.Clone(),
                        ObjectArray = new List<NestedFoo> { recursive2.Clone() }
                    };

                    recursive2 = new NestedFoo()
                    {
                        Bar = "recursive" + bar,
                        Baz = 10,
                        Nested = recursive.Clone(),
                        ObjectArray = new List<NestedFoo> { recursive2.Clone() }
                    };
                }
                return new Foo
                {
                    Bar = bar,
                    Baz = baz,
                    Nested = new NestedFoo()
                    {
                        Bar = "nested" + bar,
                        Baz = baz * 2,
                        Nested = recursive.Clone(),
                        ObjectArray = new List<NestedFoo> { recursive2.Clone() }
                    },
                    ObjectArray = new NestedFoo[]
                       {
                        new NestedFoo()
                        {
                            Bar = "objectArray" + bar,
                            Baz = baz * 3,
                            Nested = recursive.Clone(),
                            ObjectArray = new List<NestedFoo> { recursive2.Clone() }
                        },
                       },
                    ObjectList = new List<NestedFoo>
                       {
                        new NestedFoo()
                        {
                            Bar = "objectList" + bar,
                            Baz = baz * 3
                        },
                       },
                    IObjectList = new List<NestedFoo>
                       {
                        new NestedFoo()
                        {
                            Bar = "iList" + bar,
                            Baz = baz * 3
                        },
                       },
                    HashSet = new HashSet<NestedFoo>
                       {
                        new NestedFoo()
                        {
                            Bar = "hashSet" + bar,
                            Baz = baz * 3
                        },
                       },
                    SortedSet = new SortedSet<NestedFoo>
                       {
                        new NestedFoo()
                        {
                            Bar = "sortedSet" + bar,
                            Baz = baz * 3
                        },
                       },
                    ISet = new HashSet<NestedFoo>
                       {
                        new NestedFoo()
                        {
                            Bar = "iSet" + bar,
                            Baz = baz * 3
                        },
                       },
                    MiddlewareList = new List<NestedFoo>
                       {
                        new NestedFoo()
                        {
                            Bar = "cc" + bar,
                            Baz = baz * 1
                        },
                        new NestedFoo()
                        {
                            Bar = "aa" + bar,
                            Baz = baz * 1
                        },
                        new NestedFoo()
                        {
                            Bar = "bb" + bar,
                            Baz = baz * 2
                        },
                    }
                };
            }
        }

        public class NestedFoo
        {
            [Key]
            public int Id { get; set; }

            public string Bar { get; set; }

            public int Baz { get; set; }

            public NestedFoo Nested { get; set; }

            public List<NestedFoo> ObjectArray { get; set; }

            public NestedFoo Clone()
            {
                NestedFoo clone = (NestedFoo)base.MemberwiseClone();
                return clone;
            }
        }
    }
}
