using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.Security.Cryptography;
using PGManagement.Models.ViewModels;
using PGManagement.Models.Enums.Main;
using RxWeb.Core.Data;
using PGManagement.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;

namespace PGManagement.Domain.MasterModule
{
    public class EmployeeDomain : IEmployeeDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        private IPasswordHash PasswordHash { get; set; }
        private vEmployeeRecord vEmployeeRecord{ get; set; }

        public EmployeeDomain(IMasterUow uow, IPasswordHash passwordHash, IDbContextManager<MainSqlDbContext>dbContextManager)
        {
            this.Uow = uow;
            PasswordHash = passwordHash;
            DbContextManager = dbContextManager;
        }
       

        public async Task AddAsync(EmployeeCreate entity)
        {
            PasswordResult passwordResult = PasswordHash.Encrypt(entity.employeePassword);
            
            await DbContextManager.BeginTransactionAsync();
            try
            {
                var spParameters = new SqlParameter[10];
                spParameters[0] = new SqlParameter() { ParameterName = "FirstName", Value = entity.FirstName };
                spParameters[1] = new SqlParameter() { ParameterName = "LastName", Value = entity.LastName };
                spParameters[2] = new SqlParameter() { ParameterName = "Email", Value = entity.Email };
                spParameters[3] = new SqlParameter() { ParameterName = "MobileNumber", Value = entity.MobileNumber };
                spParameters[4] = new SqlParameter() { ParameterName = "Password", Value = passwordResult.Signature };
                spParameters[5] = new SqlParameter() { ParameterName = "Salt", Value = passwordResult.Salt };
                spParameters[6] = new SqlParameter() { ParameterName = "LoginBlocked", Value = entity.LoginBlocked };
                spParameters[7] = new SqlParameter() { ParameterName = "StatusId", Value = entity.StatusId};
                spParameters[8] = new SqlParameter() { ParameterName = "Salary", Value = entity.Salary};
                spParameters[9] = new SqlParameter() { ParameterName = "JoinDate", Value = entity.JoinDate};

                await DbContextManager.StoreProc<StoreProcResult>("[dbo].spEmployeeCreate", spParameters);
                await DbContextManager.CommitAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                DbContextManager.RollbackTransaction();
            }    
            //User user = new User();
            //user.StatusId = Status.Active;
            //user.FirstName = entity.FirstName;
            //user.LastName = entity.LastName;
            //user.Email = entity.Email;
            //user.MobileNumber = entity.MobileNumber;

            //await Uow.RegisterNewAsync<User>(user);
            //int UserId = await Uow.CommitAsync();
            //Employee employee = new Employee();
            //employee.UserId = UserId;
            //employee.Salary = entity.Salary;
            //employee.JoinDate = entity.JoinDate;
            //await Uow.RegisterNewAsync<Employee>(employee);
            //await Uow.CommitAsync();
        }

        public async Task UpdateAsync(EmployeeCreate entity)
        {
            await DbContextManager.BeginTransactionAsync();
            try
            {
                var spParameters = new SqlParameter[7];
                spParameters[0] = new SqlParameter() { ParameterName = "EmpId", Value = entity.EmployeeId };
                spParameters[1] = new SqlParameter() { ParameterName = "FirstName", Value = entity.FirstName };
                spParameters[2] = new SqlParameter() { ParameterName = "LastName", Value = entity.LastName };
                spParameters[3] = new SqlParameter() { ParameterName = "Email", Value = entity.Email };
                spParameters[4] = new SqlParameter() { ParameterName = "MobileNumber", Value = entity.MobileNumber };
                spParameters[5] = new SqlParameter() { ParameterName = "Salary", Value = entity.Salary };
                spParameters[6] = new SqlParameter() { ParameterName = "JoinDate", Value = entity.JoinDate };

                await DbContextManager.StoreProc<StoreProcResult>("[dbo].spEmployeeUpdate", spParameters);
                await DbContextManager.CommitAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                DbContextManager.RollbackTransaction();
            }
        }

     

       
        //public HashSet<string> DeleteValidation(EmployeeCreate parameters)
        //{
        //    throw new NotImplementedException();
        //}

        //public async Task DeleteAsync(EmployeeCreate parameters)
        //{
        //    var delEmployee = Uow.Repository<vEmployeeRecord>(parameters);
        //    await Uow.RegisterDeletedAsync(vEmployeeRecord);
        //    await Uow.CommitAsync();
        //}

        

        public async Task<object> GetBy(vEmployeeRec parameters)
        {
            return await Uow.Repository<vEmployeeRec>().SingleOrDefaultAsync(t => t.EmployeeId == parameters.EmployeeId);
        }

        public HashSet<string> DeleteValidation(vEmployeeRecord parameters)
        {
            return ValidationMessages;
        }

            //public async Task DeleteAsync(vEmployeeRecord parameters)
            //{
            //    Employee employee= await Uow.Repository<Employee>().SingleAsync(t => t.EmployeeId == parameters.EmployeeId);
            //    await Uow.RegisterDeletedAsync<Employee>(employee);
            //    await Uow.CommitAsync();
            //}

        public async Task<object> GetAsync(vEmployeeRec parameters)
        {
            return await Uow.Repository<vEmployeeRec>().AllAsync();
        }

        public HashSet<string> DeleteValidation(vEmployeeRec parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(vEmployeeRec parameters)
        {
            Employee employee = await Uow.Repository<Employee>().SingleOrDefaultAsync(t => t.EmployeeId == parameters.EmployeeId);
            await Uow.RegisterDeletedAsync<Employee>(employee);
            await Uow.CommitAsync();
        }

        public HashSet<string> AddValidation(EmployeeCreate entity)
        {
            return ValidationMessages;
        }

        public HashSet<string> UpdateValidation(EmployeeCreate entity)
        {
            return ValidationMessages;
            //throw new NotImplementedException();
        }

        //public async Task DeleteAsync(vEmployeeRecord parameters)
        //{
        //    await Uow.RegisterDeletedAsync<vEmployeeRecord>(parameters.EmployeeId);
        //    await Uow.CommitAsync();

        //}

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IEmployeeDomain : ICoreDomain<EmployeeCreate, vEmployeeRec> { }
}
