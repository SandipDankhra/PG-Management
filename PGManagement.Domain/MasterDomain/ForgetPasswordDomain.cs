using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.Security.Cryptography;

namespace PGManagement.Domain.MasterModule
{
    public class ForgetPasswordDomain : IForgetPasswordDomain
    {
        private IPasswordHash PasswordHash { get; set; }
        public ForgetPasswordDomain(IMasterUow uow,IPasswordHash passwordHash)
        {
            this.Uow = uow;
            PasswordHash = passwordHash;
        }

        public async  Task<object> GetBy(User parameters)
        {

            var mobileValidate = await Uow.Repository<User>().SingleOrDefaultAsync(t => t.MobileNumber == parameters.MobileNumber);

            if (mobileValidate != null)
            {
                Random rand = new Random();
                var otpNumber = rand.Next(1000, 9999);
                Auth auth = new Auth() { UserId = mobileValidate.UserId, AuthOtp = otpNumber };
                await Uow.RegisterNewAsync<Auth>(auth);
                await Task.FromResult("Successfull");
                return true;
            }
            else
            {
                return "Invalid Mobile number";
            }
            /* throw new NotImplementedException();*/

        }


        public HashSet<string> AddValidation(Auth entity)
        {

            return ValidationMessages;
        }

        public Task AddAsync(User parameter)
        {

            throw new NotImplementedException();
        }
        public async Task AddAsync(Auth parameter)
        {
            var otpvalid = await Uow.Repository<Auth>().SingleOrDefaultAsync(t => t.AuthOtp == parameter.AuthOtp && t.UserId == parameter.UserId);
            if (otpvalid != null)
            {
                await this.UpdateAsync(otpvalid);
            }

            /*Random rand = new Random();
            var num = rand.Next(1000, 9999);
            entity.AuthOtp = num;*/

            /* await Uow.RegisterNewAsync(entity);
             await Uow.CommitAsync();*/
        }

        public Task<object> GetBy(Auth parameters)
        {

            /*var otpvalid=await Uow.Repository<Auth>().SingleOrDefaultAsync(t=>t.AuthOtp==parameters.AuthOtp);
            if (otpvalid != null)
            {
                return true;
            }
            else
            {
                return false;
            }*/
            throw new NotImplementedException();

        }

        public HashSet<string> UpdateValidation(Auth entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(User parameter)
        {

            PasswordResult passwordResult = PasswordHash.Encrypt(parameter.UserPassword);
            parameter.Password = passwordResult.Signature;
            parameter.Salt = passwordResult.Salt;
            await Uow.RegisterDirtyAsync(parameter);
            await Uow.CommitAsync();


        }

        public HashSet<string> DeleteValidation(Auth parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Auth parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetAsync(User parameters)
        {
            /*var mobileValidate = await Uow.Repository<User>().SingleOrDefaultAsync(t => t.MobileNumber == parameters.MobileNumber);

            if (mobileValidate != null)
            {
                Random rand = new Random();
                var otpNumber = rand.Next(1000, 9999);
                Auth auth = new Auth() { UserId = mobileValidate.UserId, AuthOtp = otpNumber };
                await Uow.RegisterNewAsync<Auth>(auth);
                await Task.FromResult("Successfull");
                return true;
            }
            else
            {
                return "Invalid Mobile number";
            }*/
            throw new NotImplementedException();

        }

        public HashSet<string> DeleteValidation(User parameters)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(User parameters)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(Auth entity)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IForgetPasswordDomain : ICoreDomain<Auth, User> { }
}
