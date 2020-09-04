using System.Collections.Generic;
using System.Text;
using HotChocolate.Language;
using Newtonsoft.Json;

namespace HotChocolate.AspNetCore.Utilities
{
    public class ClientQueryRequest
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("operationName")]
        public string OperationName { get; set; }

        [JsonProperty("query")]
        public string Query { get; set; }

        [JsonProperty("variables")]
        public Dictionary<string, object> Variables { get; set; }

        [JsonProperty("extensions")]
        public Dictionary<string, object> Extensions { get; set; }

        public override string ToString()
        {
            var query = new StringBuilder();

            if (Id is not null)
            {
                query.Append($"id={Id}");
            }

            if (Query is not null)
            {
                if (Id is not null)
                {
                    query.Append("&");
                }
                query.Append($"query={Utf8GraphQLParser.Parse(Query).ToString(false)}");
            }

            if (OperationName is not null)
            {
                query.Append($"&operationName={OperationName}");
            }

            if (Variables is not null)
            {
                query.Append("&" + JsonConvert.SerializeObject(Variables));
            }

            if (Extensions is not null)
            {
                query.Append("&" + JsonConvert.SerializeObject(Extensions));
            }

            return query.ToString();
        }
    }
}
