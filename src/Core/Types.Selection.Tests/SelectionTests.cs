using System.Collections.Generic;
using System.Linq;
using HotChocolate.Execution;
using Xunit;

namespace HotChocolate.Types
{
    public class SelectionTests
    {
        [Fact]
        public void Execute_Selection_Fragment()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };

            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_Scalar()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_MultipleScalar()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_Object()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_Array()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_List()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_List_Interface()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_Set_Interface()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_Set()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_SortedSet()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_ObjectDeep()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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
        public void Execute_Selection_ArrayDeep()
        {
            // arrange
            Foo[] foos = new[]
            {
                Foo.Create("aa",1),
                Foo.Create("bb",2),
            };
            IQueryable<Foo> resultCtx = null;
            ISchema schema = SchemaBuilder.New()
                .AddQueryType<Query>(
                    d => d.Field(t => t.Foos)
                        .Resolver(foos)
                        .Use(next => async ctx =>
                        {
                            await next(ctx);
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

        public class Query
        {
            public IQueryable<Foo> Foos { get; }
        }

        public class Foo
        {
            public string Bar { get; set; }
            public int Baz { get; set; }
            public NestedFoo Nested { get; set; }
            public NestedFoo[] ObjectArray { get; set; }
            public List<NestedFoo> ObjectList { get; set; }
            public IList<NestedFoo> IObjectList { get; set; }
            public HashSet<NestedFoo> HashSet { get; set; }
            public SortedSet<NestedFoo> SortedSet { get; set; }
            public ISet<NestedFoo> ISet { get; set; }

            public static Foo Create(string bar, int baz)
            {
                var recursive = new NestedFoo()
                {
                    Bar = "recursive" + bar,
                    Baz = 10
                };
                recursive.Nested = recursive;
                recursive.ObjectArray = new[] { recursive };
                return new Foo
                {
                    Bar = bar,
                    Baz = baz,
                    Nested = new NestedFoo()
                    {
                        Bar = "nested" + bar,
                        Baz = baz * 2,
                        Nested = recursive,
                        ObjectArray = new[] { recursive }
                    },
                    ObjectArray = new NestedFoo[]
                       {
                        new NestedFoo()
                        {
                            Bar = "objectArray" + bar,
                            Baz = baz * 3,
                            Nested = recursive,
                            ObjectArray = new[] { recursive }
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
                       }
                };
            }
        }

        public class NestedFoo
        {
            public string Bar { get; set; }
            public int Baz { get; set; }
            public NestedFoo Nested { get; set; }
            public NestedFoo[] ObjectArray { get; set; }
        }
    }
}
