using System.Collections.Generic;
using HotChocolate;
using StrawberryShake.CodeGeneration.Properties;

namespace StrawberryShake.CodeGeneration
{
    /// <summary>
    /// Describes a GraphQL operation
    /// </summary>
    public abstract class OperationDescriptor : ICodeDescriptor
    {
        protected OperationDescriptor(
            NameString name,
            RuntimeTypeInfo runtimeType,
            ITypeDescriptor resultTypeReference,
            IReadOnlyList<PropertyDescriptor> arguments,
            byte[] body,
            string bodyString,
            string hashAlgorithm,
            string hashValue)
        {
            Name = name;
            RuntimeType = runtimeType;
            ResultTypeReference = resultTypeReference;
            Arguments = arguments;
            Body = body;
            BodyString = bodyString;
            HashAlgorithm = hashAlgorithm;
            HashValue = hashValue;
        }

        /// <summary>
        /// Gets the operation name.
        /// </summary>
        public NameString Name { get; }

        public RuntimeTypeInfo RuntimeType { get; }

        /// <summary>
        /// Gets the type the operation returns
        /// </summary>
        public ITypeDescriptor ResultTypeReference { get; }

        /// <summary>
        /// Gets the GraphQL Document.
        /// </summary>
        public byte[] Body { get;  }

        /// <summary>
        /// Gets the GraphQL Document as string.
        /// </summary>
        public string BodyString { get; }

        /// <summary>
        /// Gets the document hash algorithm.
        /// </summary>
        public string HashAlgorithm { get; }

        /// <summary>
        /// Gets the document hash value.
        /// </summary>
        public string HashValue { get; }

        /// <summary>
        /// The arguments the operation takes.
        /// </summary>
        public IReadOnlyList<PropertyDescriptor> Arguments { get; }
    }
}
