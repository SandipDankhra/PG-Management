using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;

namespace PGManagement.Domain.MasterModule
{
    public class vAvailableBedDomain : IvAvailableBedDomain
    {
        public vAvailableBedDomain(IMasterUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(vAvailableBed parameters)
        {
            return await Uow.Repository<vAvailableBed>().FindByAsync(t => t.BedStatus == true);//1 available  
        }

        public Task<object> GetBy(vAvailableBed parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(vAvailableBed entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vAvailableBed entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vAvailableBed entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vAvailableBed entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vAvailableBed parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vAvailableBed parameters)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvAvailableBedDomain : ICoreDomain<vAvailableBed, vAvailableBed> { }
}
