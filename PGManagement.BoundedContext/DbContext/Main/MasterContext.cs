using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PGManagement.BoundedContext.SqlContext;
using PGManagement.Models.Main;
using PGManagement.Models;
using PGManagement.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace PGManagement.BoundedContext.Main
{
    public class MasterContext : BaseBoundedContext, IMasterContext
    {
        public MasterContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<vUser> vUsers { get; set; }
		public DbSet<User> Users { get; set; }
		public DbSet<Bed> Beds { get; set; }
		public DbSet<Complaint> Complaints { get; set; }
            #endregion DbSets



    }


    public interface IMasterContext : IDbContext
    {
    }
}

