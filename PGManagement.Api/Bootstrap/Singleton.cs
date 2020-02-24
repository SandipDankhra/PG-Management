using Microsoft.Extensions.DependencyInjection;
using PGManagement.Infrastructure.Singleton;
using PGManagement.BoundedContext.Singleton;
using RxWeb.Core.Data;

namespace PGManagement.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




