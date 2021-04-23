using System;
using System.Globalization;
using System.Text.RegularExpressions;
using HotChocolate.Language;

namespace HotChocolate.Types
{
    /// <summary>
    /// The `LongitudeType` scalar represents a valid decimal degrees longitude number.
    /// <a href="https://en.wikipedia.org/wiki/Longitude">Read More</a>
    /// </summary>
    public class LongitudeType : ScalarType<double, StringValueNode>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="LongitudeType"/>
        /// </summary>
        public LongitudeType()
            : this(
                WellKnownScalarTypes.Longitude,
                ScalarResources.LongitudeType_Description)
        {
        }

        /// <summary>
        /// Initializes a new instance of <see cref="LongitudeType"/>
        /// </summary>
        public LongitudeType(
            NameString name,
            string? description = null,
            BindingBehavior bind = BindingBehavior.Explicit)
            : base(name, bind)
        {
            Description = description;
        }

        /// <inheritdoc />
        public override IValueNode ParseResult(object? resultValue)
        {
            return resultValue switch
            {
                null => NullValueNode.Default,

                string s when Longitude.TryDeserialize(s, out var value) => ParseValue(value),

                double d => ParseValue(d),

                int d => ParseValue(d),

                _ => throw ThrowHelper.LongitudeType_ParseValue_IsInvalid(this)
            };
        }

        /// <inheritdoc />
        protected override double ParseLiteral(StringValueNode valueSyntax)
        {
            if (Longitude.TryDeserialize(valueSyntax.Value, out var value) && value is not null)
            {
                return value.Value;
            }

            throw ThrowHelper.LongitudeType_ParseLiteral_IsInvalid(this);
        }

        /// <inheritdoc />
        protected override StringValueNode ParseValue(double runtimeValue)
        {
            if (runtimeValue is > Longitude._min and < Longitude._max)
            {
                return new StringValueNode(Longitude.TrySerialize(runtimeValue));
            }

            throw ThrowHelper.LongitudeType_ParseValue_IsInvalid(this);
        }

        private static class Longitude
        {
            public const double _min = -180.0;
            public const double _max = 180.0;
            private const int MaxPrecision = 8;

            private const string SexagesimalRegex =
                "^([0-9]{1,3})°\\s*([0-9]{1,3}(?:\\.(?:[0-9]{1,}))?)['′]\\s*(([0-9]{1,3}" +
                "(\\.([0-9]{1,}))?)[\"″]\\s*)?([NEOSW]?)$";

            private static readonly Regex _rx =
                new(SexagesimalRegex, RegexOptions.Compiled | RegexOptions.IgnoreCase);

            public static bool TryDeserialize(string serialized, out double? value)
            {
                MatchCollection coords = _rx.Matches(serialized);
                if (coords.Count > 0)
                {
                    var minute = double.TryParse(coords[0].Groups[2].Value, out var min)
                        ? min / 60
                        : 0;
                    var second = double.TryParse(coords[0].Groups[4].Value, out var sec)
                        ? sec / 3600
                        : 0;
                    var degree = double.Parse(coords[0].Groups[1].Value);
                    var result = degree + minute + second;

                    // Southern and western coordinates must be negative decimals
                    value = coords[0].Groups[7].Value is "W" or "S" ? -result : result;
                    return true;
                }

                value = null;
                return false;
            }

            public static string TrySerialize(double serialize)
            {
                var degree =  serialize > 0
                    ? Math.Floor(serialize)
                    : Math.Ceiling(serialize);
                var degreeDecimals = serialize - degree;

                var minutesWhole = degreeDecimals * 60;
                var minutes = minutesWhole > 0
                    ? Math.Floor(minutesWhole)
                    : Math.Ceiling(minutesWhole);
                var minutesDecimal = minutesWhole - minutes;

                var seconds = Math.Round(
                    minutesDecimal * 60,
                    MaxPrecision,
                    MidpointRounding.AwayFromZero);

                string serializedLatitude = degree switch
                {
                    > 0 and < _max =>
                        $"{degree}° {minutes}' {seconds}\" N",
                    < 0 and > _min =>
                        $"{Math.Abs(degree)}° {Math.Abs(minutes)}' {Math.Abs(seconds)}\" S",
                    _ => $"{degree}° {minutes}' {seconds}\""
                };

                return serializedLatitude;
            }
        }
    }
}