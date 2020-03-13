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

        public async  Task<object> GetBy(Authentication parameters)
        {

            var mobileValidate = await Uow.Repository<User>().SingleOrDefaultAsync(t => t.MobileNumber == parameters.MobileNumber);

            if (mobileValidate != null)
            {
                Random rand = new Random();
                var otpNumber = rand.Next(1000, 9999);
                Authentication Authentication = new Authentication() { UserId = mobileValidate.UserId, Otp = otpNumber };
                await Uow.RegisterNewAsync<Authentication>(Authentication);
                await Uow.CommitAsync();
                return mobileValidate.UserId;
            }
            else
            {
                return "Invalid Mobile number";
            }
            /* throw new NotImplementedException();*/

        }


         
        public  Task AddAsync(Authentication parameter)
        {
            //var otpvalid = await Uow.Repository<Authentication>().SingleOrDefaultAsync(t => t.Otp== parameter.Otp && t.UserId == parameter.UserId);
            throw new NotImplementedException();

        }

     

        public async Task UpdateAsync(Authentication entity)
        {
            User user;
            user = await Uow.Repository<User>().FindByKeyAsync(entity.UserId);
            //user.FirstName = "Rutva";
            PasswordResult passwordResult = PasswordHash.Encrypt(entity.userPassword);
            user.Password = passwordResult.Signature;
            user.Salt = passwordResult.Salt;
            await Uow.RegisterDirtyAsync(user);
            await Uow.CommitAsync();
        }

        public async Task<object> GetAsync(Authentication parameters)
        {
            return await Uow.Repository<Authentication>().SingleOrDefaultAsync(t => t.Otp == parameters.Otp && t.UserId == parameters.UserId);

        }

        public HashSet<string> AddValidation(Authentication entity)
        {
            //throw new NotImplementedException();
            return ValidationMessages;
        }

        public HashSet<string> UpdateValidation(Authentication entity)
        {
            return ValidationMessages;
        }

        public HashSet<string> DeleteValidation(Authentication parameters)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Authentication parameters)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IForgetPasswordDomain : ICoreDomain<Authentication, Authentication> { }
}
