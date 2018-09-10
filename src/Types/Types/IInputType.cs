using System;
using HotChocolate.Language;

namespace HotChocolate.Types
{
    public interface IInputType
        : IType
    {
        Type ClrType { get; }

        bool IsInstanceOfType(IValueNode literal);

        object ParseLiteral(IValueNode literal);

        IValueNode ParseValue(object value);
    }
}
