using System;
using HotChocolate.Language;
using Snapshooter.Xunit;
using Xunit;

namespace HotChocolate.Types.Scalars
{
    public class UnsignedIntTypeTests : ScalarTypeTestBase
    {
        [Fact]
        public void Schema_WithScalar_IsMatch()
        {
            // arrange
            ISchema schema = BuildSchema<UnsignedIntType>();

            // act
            // assert
            schema.ToString().MatchSnapshot();
        }

        [Theory]
        [InlineData(typeof(EnumValueNode), TestEnum.Foo, false)]
        [InlineData(typeof(FloatValueNode), 1d, false)]
        [InlineData(typeof(BooleanValueNode), true, false)]
        [InlineData(typeof(StringValueNode), "", false)]
        [InlineData(typeof(StringValueNode), "foo", false)]
        [InlineData(typeof(IntValueNode), uint.MinValue, false)]
        [InlineData(typeof(IntValueNode), -1, false)]
        [InlineData(typeof(IntValueNode), 0, true)]
        [InlineData(typeof(IntValueNode), 1, true)]
        [InlineData(typeof(IntValueNode), uint.MaxValue, true)]
        [InlineData(typeof(IntValueNode), uint.MinValue, true)]
        [InlineData(typeof(NullValueNode), null, true)]
        public void IsInstanceOfType_GivenValueNode_MatchExpected(
            Type type,
            object value,
            bool expected)
        {
            // arrange
            IValueNode valueNode = CreateValueNode(type, value);

            // act
            // assert
            ExpectIsInstanceOfTypeToMatch<UnsignedIntType>(valueNode, expected);
        }

        [Theory]
        [InlineData(TestEnum.Foo, false)]
        [InlineData(1d, false)]
        [InlineData(true, false)]
        [InlineData("foo", false)]
        [InlineData(int.MinValue, false)]
        [InlineData(-1, false)]
        [InlineData(1, true)]
        [InlineData(0, false)]
        [InlineData(null, true)]
        [InlineData(uint.MaxValue, true)]
        [InlineData(uint.MinValue, true)]
        public void IsInstanceOfType_GivenObject_MatchExpected(object value, bool expected)
        {
            // arrange
            // act
            // assert
            ExpectIsInstanceOfTypeToMatch<UnsignedIntType>(value, expected);
        }

        [Theory]
        [InlineData(typeof(IntValueNode), 0, 0)]
        [InlineData(typeof(IntValueNode), 1, 1)]
        [InlineData(typeof(IntValueNode), uint.MaxValue, uint.MaxValue)]
        [InlineData(typeof(IntValueNode), uint.MinValue, uint.MinValue)]
        [InlineData(typeof(NullValueNode), null, null)]
        public void ParseLiteral_GivenValueNode_MatchExpected(
            Type type,
            object value,
            object expected)
        {
            // arrange
            IValueNode valueNode = CreateValueNode(type, value);

            // act
            // assert
            ExpectParseLiteralToMatch<UnsignedIntType>(valueNode, expected);
        }

        [Theory]
        [InlineData(typeof(EnumValueNode), TestEnum.Foo)]
        [InlineData(typeof(FloatValueNode), 1d)]
        [InlineData(typeof(BooleanValueNode), true)]
        [InlineData(typeof(StringValueNode), "")]
        [InlineData(typeof(IntValueNode), int.MinValue)]
        [InlineData(typeof(IntValueNode), -1)]
        public void ParseLiteral_GivenValueNode_ThrowSerializationException(Type type, object value)
        {
            // arrange
            IValueNode valueNode = CreateValueNode(type, value);

            // act
            // assert
            ExpectParseLiteralToThrowSerializationException<UnsignedIntType>(valueNode);
        }

        [Theory]
        [InlineData(typeof(IntValueNode), 0)]
        [InlineData(typeof(IntValueNode), 1)]
        [InlineData(typeof(IntValueNode), uint.MaxValue)]
        [InlineData(typeof(IntValueNode), uint.MinValue)]
        [InlineData(typeof(NullValueNode), null)]
        public void ParseValue_GivenObject_MatchExpectedType(Type type, object value)
        {
            // arrange
            // act
            // assert
            ExpectParseValueToMatchType<UnsignedIntType>(value, type);
        }

        [Theory]
        [InlineData(TestEnum.Foo)]
        [InlineData(1d)]
        [InlineData(true)]
        [InlineData("foo")]
        [InlineData(int.MinValue)]
        [InlineData(-1)]
        public void ParseLiteral_GivenObject_ThrowSerializationException(object value)
        {
            // arrange
            // act
            // assert
            ExpectParseValueToThrowSerializationException<UnsignedIntType>(value);
        }

        [Theory]
        [InlineData(0, 0)]
        [InlineData(1, 1)]
        [InlineData(uint.MaxValue, uint.MaxValue)]
        [InlineData(uint.MinValue, uint.MinValue)]
        [InlineData(null, null)]
        public void Deserialize_GivenValue_MatchExpected(
            object resultValue,
            object runtimeValue)
        {
            // arrange
            // act
            // assert
            ExpectDeserializeToMatch<UnsignedIntType>(resultValue, runtimeValue);
        }

        [Theory]
        [InlineData(TestEnum.Foo)]
        [InlineData(1d)]
        [InlineData(true)]
        [InlineData("foo")]
        [InlineData(int.MinValue)]
        [InlineData(-1)]
        public void Deserialize_GivenValue_ThrowSerializationException(object value)
        {
            // arrange
            // act
            // assert
            ExpectDeserializeToThrowSerializationException<UnsignedIntType>(value);
        }

        [Theory]
        [InlineData(0, 0)]
        [InlineData(1, 1)]
        [InlineData(uint.MaxValue, uint.MaxValue)]
        [InlineData(uint.MinValue, uint.MinValue)]
        [InlineData(null, null)]
        public void Serialize_GivenObject_MatchExpectedType(
            object runtimeValue,
            object resultValue)
        {
            // arrange
            // act
            // assert
            ExpectSerializeToMatch<UnsignedIntType>(runtimeValue, resultValue);
        }

        [Theory]
        [InlineData(TestEnum.Foo)]
        [InlineData(1d)]
        [InlineData(true)]
        [InlineData("foo")]
        [InlineData(int.MinValue)]
        [InlineData(-1)]
        public void Serialize_GivenObject_ThrowSerializationException(object value)
        {
            // arrange
            // act
            // assert
            ExpectSerializeToThrowSerializationException<UnsignedIntType>(value);
        }
    }
}
