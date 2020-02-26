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
using RxWeb.Core.Sanitizers.Enums;
using RxWeb.Core.Sanitizers;

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
        public DbSet<Menu> Menus { get; set; }
        public DbSet<Document> Document { get; set; }
        public DbSet<vAvailableBed> vAvailableBeds { get; set; }
        public DbSet<vEmployee> vEmployee { get; set; }
		public DbSet<Employee> Employee { get; set; }
		public DbSet<vEmployeeRecord> vEmployeeRecord { get; set; }
        public DbSet<Requester> Requester { get; set; }
      

       
        #endregion DbSets





    }

    public interface IMasterContext : IDbContext
    {
    }
}

