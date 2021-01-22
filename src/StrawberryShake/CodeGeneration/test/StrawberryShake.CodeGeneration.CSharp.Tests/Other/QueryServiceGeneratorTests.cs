using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Snapshooter.Xunit;
using StrawberryShake.CodeGeneration;
using StrawberryShake.CodeGeneration.CSharp;
using Xunit;

namespace StrawberryShake.Other
{
    public class QueryServiceGeneratorTests
    {
        readonly StringBuilder _stringBuilder;
        readonly CodeWriter _codeWriter;
        readonly OperationServiceGenerator _generator;

        public QueryServiceGeneratorTests()
        {
            _stringBuilder = new StringBuilder();
            _codeWriter = new CodeWriter(_stringBuilder);
            _generator = new OperationServiceGenerator();
        }

        [Fact]
        public async Task GenerateQueryServiceWithoutArguments()
        {
            await _generator.Write(
                _codeWriter,
                new QueryOperationDescriptor(
                    new TypeReferenceDescriptor(
                        new TypeDescriptor(
                            "Foo",
                            "FooNamespace"
                        ),
                        false,
                        ListType.NoList
                    ),
                    new Dictionary<string, TypeReferenceDescriptor>()
                )
            );

            _stringBuilder.ToString().MatchSnapshot();
        }

        [Fact]
        public async Task GenerateQueryServiceWithValueArgument()
        {
            await _generator.Write(
                _codeWriter,
                new QueryOperationDescriptor(
                    new TypeReferenceDescriptor(
                        new TypeDescriptor(
                            "Foo",
                            "FooNamespace"
                        ),
                        false,
                        ListType.NoList
                    ),
                    new Dictionary<string, TypeReferenceDescriptor>()
                    {
                        {
                            "name",
                            TestHelper.GetNonNullStringTypeReference()
                        }
                    }
                )
            );

            _stringBuilder.ToString().MatchSnapshot();
        }

        [Fact]
        public async Task GenerateQueryServiceWithReferenceArgument()
        {
            await _generator.Write(
                _codeWriter,
                new QueryOperationDescriptor(
                    new TypeReferenceDescriptor(
                        new TypeDescriptor(
                            "Foo",
                            "FooNamespace"
                        ),
                        false,
                        ListType.NoList
                    ),
                    new Dictionary<string, TypeReferenceDescriptor>()
                    {
                        {
                            "bar", new TypeReferenceDescriptor(
                                new TypeDescriptor(
                                    "BarInput",
                                    "BarInputNamespace"
                                ),
                                true,
                                ListType.NoList
                            )
                        }
                    }
                )
            );

            _stringBuilder.ToString().MatchSnapshot();
        }

        [Fact]
        public async Task GenerateQueryServiceWithArguments()
        {
            await _generator.Write(
                _codeWriter,
                new QueryOperationDescriptor(
                    new TypeReferenceDescriptor(
                        new TypeDescriptor(
                            "Foo",
                            "FooNamespace"
                        ),
                        false,
                        ListType.NoList
                    ),
                    new Dictionary<string, TypeReferenceDescriptor>()
                    {
                        {
                            "name",
                            TestHelper.GetNonNullStringTypeReference()
                        },
                        {
                            "a", new TypeReferenceDescriptor(
                                new TypeDescriptor(
                                    "BarInput",
                                    "BarInputNamespace"
                                ),
                                true,
                                ListType.NoList
                            )
                        }
                    }
                )
            );

            _stringBuilder.ToString().MatchSnapshot();
        }
    }
}