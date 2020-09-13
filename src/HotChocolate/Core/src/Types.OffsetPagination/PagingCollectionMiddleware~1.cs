﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate.Internal;
using HotChocolate.Resolvers;

namespace HotChocolate.Types.Pagination
{
    public class QueryableOffsetPagingProvider
        : OffsetPagingProvider
    {
        private static readonly MethodInfo _createHandler =
            typeof(QueryableOffsetPagingProvider)
                .GetMethod(nameof(CreateHandlerInternal))!;

        public override bool CanHandle(IExtendedType source)
        {
            throw new NotImplementedException();
        }

        protected override OffsetPagingHandler CreateHandler(
            IExtendedType source,
            PagingSettings settings)
        {
            if (source is null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            return (OffsetPagingHandler)_createHandler
                .MakeGenericMethod(source.ElementType.Source)
                .Invoke(null, new object[] { settings });
        }

        private static QueryableOffsetPagingHandler<TEntity> CreateHandlerInternal<TEntity>(
            PagingSettings settings) =>
            new QueryableOffsetPagingHandler<TEntity>(settings);
    }


    public class QueryableOffsetPagingHandler<TEntity>
        : OffsetPagingHandler
    {
        public QueryableOffsetPagingHandler(PagingSettings settings)
            : base(settings)
        {
        }

        protected override async ValueTask<CollectionSegment> SliceAsync(
            IResolverContext context,
            object source,
            OffsetPagingArguments arguments)
        {
            IQueryable<TEntity> queryable = source switch
            {
                IQueryable<TEntity> q => q,
                IEnumerable<TEntity> e => e.AsQueryable(),
                _ => throw new GraphQLException("Cannot handle the specified data source.")
            };

            IQueryable<TEntity> original = queryable;

            if (arguments.Skip.HasValue)
            {
                queryable = queryable.Skip(arguments.Skip.Value);
            }

            queryable = queryable.Take(arguments.Take + 1);
            List<TEntity> items =
                await ExecuteQueryableAsync(queryable, context.RequestAborted)
                    .ConfigureAwait(false);
            var pageInfo = new CollectionSegmentInfo(
                items.Count == arguments.Take + 1,
                (arguments.Skip ?? 0) > 0);
            items.RemoveAt(arguments.Take);

            return new CollectionSegment((IReadOnlyCollection<object>)items, pageInfo, CountAsync);

            async ValueTask<int> CountAsync(CancellationToken cancellationToken) =>
                await Task.Run(original.Count, cancellationToken).ConfigureAwait(false);
        }

        protected virtual async ValueTask<List<TEntity>> ExecuteQueryableAsync(
            IQueryable<TEntity> queryable,
            CancellationToken cancellationToken)
        {
            var list = new List<TEntity>();

            if (queryable is IAsyncEnumerable<TEntity> enumerable)
            {
                await foreach (TEntity item in enumerable.WithCancellation(cancellationToken)
                    .ConfigureAwait(false))
                {
                    list.Add(item);
                }
            }
            else
            {
                await Task.Run(() =>
                {
                    foreach (TEntity item in queryable)
                    {
                        if (cancellationToken.IsCancellationRequested)
                        {
                            break;
                        }

                        list.Add(item);
                    }

                }).ConfigureAwait(false);
            }

            return list;

        }
    }
}
