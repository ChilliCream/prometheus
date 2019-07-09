using System;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate.Server;

namespace HotChocolate.AspNetCore.Subscriptions
{
    public interface IConnectMessageInterceptor
    {
        Task<ConnectionStatus> OnReceiveAsync(
            ISocketConnection connection,
            InitializeConnectionMessage message,
            CancellationToken cancellationToken);
    }

}
