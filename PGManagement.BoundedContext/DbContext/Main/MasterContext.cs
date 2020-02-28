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
		public DbSet<Complaint> Complaints { get; set; }

        public DbSet<vInvoiceRecord> vInvoiceRecords { get; set; }

        public DbSet<Review> reviews { get; set; }
        public DbSet<Notice> Notices { get; set; }
        public DbSet<Flat> Flat { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Bed> Bed { get; set; }
        public DbSet<vBookBed> vBookBed { get; set; }
        public DbSet<BookBed> BookBed { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<vEmployee> vEmployees { get; set; }
       
   
        public DbSet<Expense> expense { get; set; }
        public DbSet<Employee> employee { get; set; }
        public DbSet<Authentication> authentication { get; set; }
        #endregion DbSets

 

    }


    public interface IMasterContext : IDbContext
    {
    }
}

