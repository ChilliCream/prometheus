using HotChocolate.Types.Descriptors;

namespace HotChocolate
{
    public class SchemaInterceptor : ISchemaInterceptor
    {
        protected SchemaInterceptor()
        {
        }

        public virtual void OnBeforeCreate(
            IDescriptorContext context,
            ISchemaBuilder schemaBuilder)
        {
        }

        public virtual void OnAfterCreate(
            IDescriptorContext context,
            ISchema schema)
        {
        }
    }
}
