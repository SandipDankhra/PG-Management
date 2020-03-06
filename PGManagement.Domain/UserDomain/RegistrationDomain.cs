using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.Security.Cryptography;
using System.Linq;

namespace PGManagement.Domain.UserModule
{
    public class RegistrationDomain : IRegistrationDomain
    {
        private IPasswordHash PasswordHash { get; set; }
        public RegistrationDomain(IUserUow uow, IPasswordHash passwordHash) {
            this.Uow = uow;
            PasswordHash = passwordHash;
        }

        public async Task<object> GetAsync(User parameters)
        {
            return await Uow.Repository<User>().AllAsync();
        }

        public Task<object> GetBy(User parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(User entity)
        {
            PasswordResult passwordResult= PasswordHash.Encrypt(entity.userPassword);
            entity.Password = passwordResult.Signature;
            entity.Salt = passwordResult.Salt;
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(User entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(User parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(User parameters)
        {
            throw new NotImplementedException();
        }

        public IUserUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IRegistrationDomain : ICoreDomain<User, User> { }
}
