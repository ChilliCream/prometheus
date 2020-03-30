﻿using System.Linq;
using HotChocolate.Language;
using Snapshooter.Xunit;
using Xunit;

namespace HotChocolate.Validation
{
    public class DirectivesAreDefinedRuleTests
        : DocumentValidatorVisitorTestBase
    {
        public DirectivesAreDefinedRuleTests()
            : base(services => services.AddDirectivesAreDefinedRule())
        {
        }

        [Fact]
        public void SupportedDirective()
        {
            // arrange
            IDocumentValidatorContext context = ValidationUtils.CreateContext();
            DocumentNode query = Utf8GraphQLParser.Parse(@"
                {
                    dog {
                        name @skip(if: true)
                    }
                }
            ");

            // act
            Rule.Validate(context, query);

            // assert
            Assert.Empty(context.Errors);
        }

        [Fact]
        public void UnsupportedDirective()
        {
            // arrange
            IDocumentValidatorContext context = ValidationUtils.CreateContext();
            DocumentNode query = Utf8GraphQLParser.Parse(@"
                {
                    dog {
                        name @foo(bar: true)
                    }
                }
            ");

            // act
            Rule.Validate(context, query);

            // assert
            Assert.Collection(context.Errors,
                t => Assert.Equal(
                    "The specified directive `foo` " +
                    "is not supported by the current schema.",
                    t.Message));
            context.Errors.First().MatchSnapshot();
        }
    }
}
