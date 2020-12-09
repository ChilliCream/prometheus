using HotChocolate.Language;
using HotChocolate.Properties;

#nullable enable

namespace HotChocolate.Types
{
    public sealed class LongType
        : IntegerTypeBase<long>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LongType"/> class.
        /// </summary>
        public LongType()
            : this(int.MinValue, int.MaxValue)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="LongType"/> class.
        /// </summary>
        public LongType(int min, int max)
            : this(
                ScalarNames.Long,
                TypeResources.LongType_Description,
                min,
                max,
                BindingBehavior.Implicit)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="LongType"/> class.
        /// </summary>
        public LongType(
            NameString name,
            string? description = null,
            int min = byte.MinValue,
            int max = byte.MaxValue,
            BindingBehavior bind = BindingBehavior.Explicit)
            : base(name, min, max, bind)
        {
            Description = description;
        }

        protected override long ParseLiteral(IntValueNode valueSyntax) =>
            valueSyntax.ToInt64();

        protected override IntValueNode ParseValue(long runtimeValue) =>
            new(runtimeValue);
    }
}
