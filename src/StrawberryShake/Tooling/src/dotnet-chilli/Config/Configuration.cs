using System.Collections.Generic;

namespace StrawberryShake.Tools.Config
{
    public class Configuration
    {
        public List<SchemaFile> Schemas { get; set; } = new List<SchemaFile>();

        public string ClientName { get; set; } = "Client";
    }
}
