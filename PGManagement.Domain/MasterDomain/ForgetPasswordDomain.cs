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
                Authentication Authentication = new Authentication() { UserId = mobileValidate.UserId, Otp = otpNumber };
                await Uow.RegisterNewAsync<Authentication>(Authentication);
                await Task.FromResult("Successfull");
                return true;
            }
            else
            {
                return "Invalid Mobile number";
            }
            /* throw new NotImplementedException();*/

        }


        public HashSet<string> AddValidation(Authentication entity)
        {

            return ValidationMessages;
        }

        public Task AddAsync(User parameter)
        {

            throw new NotImplementedException();
        }
        public async Task AddAsync(Authentication parameter)
        {
            var otpvalid = await Uow.Repository<Authentication>().SingleOrDefaultAsync(t => t.Otp == parameter.Otp && t.UserId == parameter.UserId);
            if (otpvalid != null)
            {
                await this.UpdateAsync(otpvalid);
            }

            /*Random rand = new Random();
            var num = rand.Next(1000, 9999);
            entity.AuthenticationOtp = num;*/

            /* await Uow.RegisterNewAsync(entity);
             await Uow.CommitAsync();*/
        }

        public Task<object> GetBy(Authentication parameters)
        {

            /*var otpvalid=await Uow.Repository<Authentication>().SingleOrDefaultAsync(t=>t.AuthenticationOtp==parameters.AuthenticationOtp);
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

        public HashSet<string> UpdateValidation(Authentication entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(User parameter)
        {

            PasswordResult passwordResult = PasswordHash.Encrypt(parameter.userPassword);
            parameter.Password = passwordResult.Signature;
            parameter.Salt = passwordResult.Salt;
            await Uow.RegisterDirtyAsync(parameter);
            await Uow.CommitAsync();


        }

        public HashSet<string> DeleteValidation(Authentication parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Authentication parameters)
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
                Authentication Authentication = new Authentication() { UserId = mobileValidate.UserId, AuthenticationOtp = otpNumber };
                await Uow.RegisterNewAsync<Authentication>(Authentication);
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

        public Task UpdateAsync(Authentication entity)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IForgetPasswordDomain : ICoreDomain<Authentication, User> { }
}
