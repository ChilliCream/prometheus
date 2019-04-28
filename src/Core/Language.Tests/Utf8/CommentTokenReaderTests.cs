﻿using System.Text;
using Xunit;

namespace HotChocolate.Language
{
    public class Utf8CommentTokenReaderTests
    {
        [InlineData("# my comment foo bar")]
        [InlineData("# my comment foo bar\n   ")]
        [InlineData("     \n# my comment foo bar")]
        [InlineData("     \n# my comment foo bar\n    ")]
        [Theory]
        private void ReadToken(string sourceText)
        {
            // arrange
            byte[] source = Encoding.UTF8.GetBytes(sourceText);
            var reader = new Utf8GraphQLReader(source);

            // act
            reader.Read();

            // assert
            Assert.Equal("my comment foo bar", reader.GetString());
            Assert.Equal(TokenKind.Comment, reader.Kind);
        }
    }
}
