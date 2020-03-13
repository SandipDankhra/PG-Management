using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.Security.Cryptography;
using PGManagement.Models.ViewModels;

namespace PGManagement.Domain.MasterModule
{
    public class ChangePasswordDomain : IChangePasswordDomain
    {
        //private ChangePassword ChangePassword { get; set; }
        private User User { get; set; }


        private IPasswordHash PasswordHash { get; set; }

        public ChangePasswordDomain(IMasterUow uow, IPasswordHash passwordHash) {
            this.Uow = uow;
            PasswordHash = passwordHash;
        }

        public async Task<object> GetAsync(ChangePassword parameters)
        {
            User user = Uow.Repository<User>().SingleOrDefault(t => t.UserId == parameters.UserId);
            bool password = PasswordHash.VerifySignature(parameters.OldPassword.ToString(), user.Password, user.Salt);
            if (password)
            {

                PasswordResult passwordResult = PasswordHash.Encrypt(parameters.NewPassword);
                user.Password = passwordResult.Signature;
                user.Salt = passwordResult.Salt;
                await this.UpdateAsync(user);
                return true;
            }
            else
            {
                return false;
            }
           
        }

        public  Task<object> GetBy(ChangePassword parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(ChangePassword entity)
        {
            return ValidationMessages;
        }

        public  Task AddAsync(ChangePassword entity)
        {
            throw new NotImplementedException();
            //User user = Uow.Repository<User>().SingleOrDefault(t => t.UserId == entity.UserId);
            //bool password = PasswordHash.VerifySignature(entity.OldPassword.ToString(), user.Password, user.Salt);
            //if (password)
            //{

            //    PasswordResult passwordResult = PasswordHash.Encrypt(entity.NewPassword);
            //    user.Password = passwordResult.Signature;
            //    user.Salt = passwordResult.Salt;
            //    await this.UpdateAsync(user);
            //}
            //await Uow.RegisterNewAsync(entity);
            //await Uow.CommitAsync();

        }
        public async Task UpdateAsync(User entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(ChangePassword entity)
        {
            return ValidationMessages;
        }

       

        public HashSet<string> DeleteValidation(ChangePassword parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(ChangePassword parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetAsync(User parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(User parameters)
        {
            throw new NotImplementedException();
        }

        

        public Task DeleteAsync(User parameters)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(ChangePassword entity)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IChangePasswordDomain : ICoreDomain<ChangePassword, ChangePassword> { }
}
