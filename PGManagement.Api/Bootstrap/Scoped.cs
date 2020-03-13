#region Namespace
using Microsoft.Extensions.DependencyInjection;
using PGManagement.Infrastructure.Security;
using RxWeb.Core.Data;
using RxWeb.Core.Security;
using RxWeb.Core.Annotations;
using RxWeb.Core;
using PGManagement.UnitOfWork.DbEntityAudit;
using PGManagement.BoundedContext.Main;
using PGManagement.UnitOfWork.Main;
using PGManagement.Domain.MasterModule;
using PGManagement.Domain.UserModule;
#endregion Namespace



namespace PGManagement.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
            serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();

                       
            serviceCollection.AddScoped<IUserUow, UserUow>();
            #endregion ContextService

            #region DomainService

            
            serviceCollection.AddScoped<ICreateBookBedDomain, CreateBookBedDomain>();
            serviceCollection.AddScoped<IRolePermissionDomain, RolePermissionDomain>();
            serviceCollection.AddScoped<IRegistrationDomain, RegistrationDomain>();

     


            serviceCollection.AddScoped<IChangePasswordDomain, ChangePasswordDomain>();

            serviceCollection.AddScoped<IForgetPasswordDomain, ForgetPasswordDomain>();
            serviceCollection.AddScoped<IvAvailableBedDomain, vAvailableBedDomain>();

            
            
            serviceCollection.AddScoped<IEmployeeDomain, EmployeeDomain>();
            
            serviceCollection.AddScoped<InoticeDomain, noticeDomain>();
                        
            serviceCollection.AddScoped<IvRequesterDomain, vRequesterDomain>();
            #endregion DomainService

        }
    }
}




