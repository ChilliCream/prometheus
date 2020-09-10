using System;
using HotChocolate;
using HotChocolate.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Patterns;

namespace Microsoft.AspNetCore.Builder
{
    public static class HttpEndpointRouteBuilderExtensions
    {
        public static IEndpointConventionBuilder MapGraphQL(
            this IEndpointRouteBuilder endpointRouteBuilder,
            string pattern = "/graphql",
            NameString schemaName = default) =>
            MapGraphQL(endpointRouteBuilder, RoutePatternFactory.Parse(pattern), schemaName);

        public static IEndpointConventionBuilder MapGraphQL(
            this IEndpointRouteBuilder endpointRouteBuilder,
            RoutePattern pattern,
            NameString schemaName = default)
        {
            if (endpointRouteBuilder == null)
            {
                throw new ArgumentNullException(nameof(endpointRouteBuilder));
            }

            IApplicationBuilder requestPipeline =
                endpointRouteBuilder.CreateApplicationBuilder();

            requestPipeline.UseMiddleware<WebSocketSubscriptionMiddleware>(
                schemaName.HasValue ? schemaName : Schema.DefaultName);
            requestPipeline.UseMiddleware<HttpPostMiddleware>(
                schemaName.HasValue ? schemaName : Schema.DefaultName);
            requestPipeline.UseMiddleware<HttpGetSchemaMiddleware>(
                schemaName.HasValue ? schemaName : Schema.DefaultName);
            requestPipeline.UseMiddleware<HttpGetMiddleware>(
                schemaName.HasValue ? schemaName : Schema.DefaultName);

            return endpointRouteBuilder
                .Map(pattern, requestPipeline.Build())
                .WithDisplayName("Hot Chocolate GraphQL Pipeline");
        }
    }
}
