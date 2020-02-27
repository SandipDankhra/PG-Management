using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.Data;
using PGManagement.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using PGManagement.Models.ViewModels;
using System.Linq;

namespace PGManagement.Domain.MasterModule
{
    public class RolePermissionDomain : IRolePermissionDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public RolePermissionDomain(IMasterUow uow,IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public async Task<object> GetAsync(RolePermission parameters)
        {
           return await Uow.Repository<RolePermission>().FindByAsync(t => t.RoleId == parameters.RoleId);
        }

        public Task<object> GetBy(RolePermission parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(RolePermissions entity)
        {
            return ValidationMessages;
        }

        //public async Task AddAsync([FromBody]IList<RolePermission> entity)
        //{
        //    await DbContextManager.BeginTransactionAsync();
        //    var spParameters = new SqlParameter[1];
        //    spParameters[0] = new SqlParameter() { ParameterName = "RolePermissions", Value = entity.ToString() };
        //    var result = await DbContextManager.StoreProc<RolePermissions>("[dbo].spInsertcandidateAvailabilities", spParameters);
        //    return Ok(result.SingleOrDefault()?.Result);
        //}
        

        public HashSet<string> UpdateValidation(RolePermissions entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(RolePermissions entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(RolePermission parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(RolePermission parameters)
        {
            throw new NotImplementedException();
        }

        public Task AddAsync(RolePermissions entity)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IRolePermissionDomain : ICoreDomain<RolePermissions, RolePermission> { }
}
