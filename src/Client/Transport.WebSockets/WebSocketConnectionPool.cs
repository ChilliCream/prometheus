using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace StrawberryShake.Transport.WebSockets
{
    internal sealed class WebSocketConnectionPool
        : ISocketConnectionPool
    {
        private readonly SemaphoreSlim _semaphoreSlim = new SemaphoreSlim(1, 1);
        private readonly Dictionary<string, ConnectionInfo> _connections =
            new  Dictionary<string, ConnectionInfo>();
        private readonly IWebSocketClientFactory _webSocketClientFactory;

        public WebSocketConnectionPool(IWebSocketClientFactory webSocketClientFactory)
        {
            _webSocketClientFactory = webSocketClientFactory
                ?? throw new ArgumentNullException(nameof(webSocketClientFactory));
        }

        public async Task<ISocketConnection> RentAsync(
            string name,
            CancellationToken cancellationToken = default)
        {
            await _semaphoreSlim.WaitAsync(cancellationToken).ConfigureAwait(false);

            try
            {
                if (_connections.TryGetValue(name, out ConnectionInfo connectionInfo))
                {
                    connectionInfo.Rentals++;
                }
                else
                {
                    IWebSocketClient webSocketClient = _webSocketClientFactory.CreateClient(name);
                    connectionInfo = new ConnectionInfo(new WebSocketConnection(webSocketClient));

                    await connectionInfo.Connection.OpenAsync(cancellationToken)
                        .ConfigureAwait(false);

                    await InitializeConnectionAsync(connectionInfo.Connection, cancellationToken)
                        .ConfigureAwait(false);
                }

                return connectionInfo.Connection;
            }
            finally
            {
                _semaphoreSlim.Release();
            }
        }

        public async Task ReturnAsync(
            ISocketConnection connection,
            CancellationToken cancellationToken = default)
        {
            await _semaphoreSlim.WaitAsync(cancellationToken).ConfigureAwait(false);

            try
            {
                if (_connections.TryGetValue(connection.Name, out ConnectionInfo connectionInfo))
                {
                    connectionInfo.Rentals--;
                }
                else
                {
                    throw new ArgumentException(
                        "The specified connection does not belong to this pool.",
                        nameof(connection));
                }

                if (connectionInfo.Rentals < 1)
                {
                    await TerminateConnectionAsync(connection, cancellationToken)
                        .ConfigureAwait(false);
                    _connections.Remove(connection.Name);
                }
            }
            finally
            {
                _semaphoreSlim.Release();
            }
        }

        private Task InitializeConnectionAsync(
            ISocketConnection connection,
            CancellationToken cancellationToken = default)
        {
            var messageWriter = new SocketMessageWriter();
            messageWriter.WriteStartObject();
            messageWriter.WriteType(MessageTypes.Connection.Initialize);
            messageWriter.WriteEndObject();

            return connection.SendAsync(messageWriter.Body, cancellationToken);
        }

        private Task TerminateConnectionAsync(
            ISocketConnection connection,
            CancellationToken cancellationToken = default)
        {
            var messageWriter = new SocketMessageWriter();
            messageWriter.WriteStartObject();
            messageWriter.WriteType(MessageTypes.Connection.Terminate);
            messageWriter.WriteEndObject();

            return connection.SendAsync(messageWriter.Body, cancellationToken);
        }

        public void Dispose()
        {
            throw new System.NotImplementedException();
        }

        private sealed class ConnectionInfo
        {
            public ConnectionInfo(ISocketConnection connection)
            {
                Connection = connection;
                Rentals = 1;
            }

            public ISocketConnection Connection { get; }

            public int Rentals { get; set; }
        }
    }
}
