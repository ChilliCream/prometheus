using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Pipelines;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate.Execution;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace HotChocolate.AspNetCore.Subscriptions
{
    internal class InMemoryWebSocketContext
        : IWebSocketContext
    {
        public Dictionary<string, ISubscription> Subscriptions { get; } =
            new Dictionary<string, ISubscription>();

        public Queue<GenericOperationMessage> Incoming { get; } =
            new Queue<GenericOperationMessage>();

        public List<GenericOperationMessage> Outgoing { get; } =
            new List<GenericOperationMessage>();

        public HttpContext HttpContext => throw new NotSupportedException();

        public IQueryExecutor QueryExecutor { get; set; }

        public WebSocketCloseStatus? CloseStatus { get; set; }

        public bool IsDisposed { get; private set; }
        public IDictionary<string, object> RequestProperties
        {
            get;
            private set;
        }

        public void RegisterSubscription(ISubscription subscription)
        {
            Subscriptions[subscription.Id] = subscription;
        }

        public void UnregisterSubscription(string subscriptionId)
        {
            if (Subscriptions.TryGetValue(subscriptionId,
                out ISubscription subscription))
            {
                subscription.Dispose();
                Subscriptions.Remove(subscriptionId);
            }
        }

        public Task PrepareRequestAsync(IQueryRequestBuilder requestBuilder)
        {
            requestBuilder.SetProperties(
                new Dictionary<string, object>(RequestProperties));
            return Task.CompletedTask;
        }

        public async Task ReceiveMessageAsync(
            PipeWriter writer,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested
                && !Incoming.Any())
            {
                await Task.Delay(100, cancellationToken);
            }

            if (cancellationToken.IsCancellationRequested)
            {
                return;
            }

            GenericOperationMessage message = Incoming.Dequeue();
            string json = JsonConvert.SerializeObject(message);
            byte[] buffer = Encoding.UTF8.GetBytes(json);

            Memory<byte> memory = writer.GetMemory(buffer.Length);
            for (int i = 0; i < buffer.Length; i++)
            {
                memory.Span[i] = buffer[i];
            }

            writer.Advance(buffer.Length);

            await writer
                .FlushAsync(cancellationToken)
                .ConfigureAwait(false);
        }

        public Task SendMessageAsync(
            Stream messageStream,
            CancellationToken cancellationToken)
        {
            var buffer = new byte[messageStream.Length];

            messageStream.Read(buffer, 0, buffer.Length);

            string json = Encoding.UTF8.GetString(buffer);

            Outgoing.Add(JsonConvert
                .DeserializeObject<GenericOperationMessage>(json));

            return Task.CompletedTask;
        }

        public Task<ConnectionStatus> OpenAsync(IDictionary<string, object> properties)
        {
            RequestProperties = properties;
            return Task.FromResult(ConnectionStatus.Accept());
        }

        public Task CloseAsync()
        {
            Dispose();
            return Task.CompletedTask;
        }
        public void Dispose()
        {
            IsDisposed = true;
        }
    }
}
