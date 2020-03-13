using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;

namespace PGManagement.Domain.MasterModule
{
    public class vRequesterDomain : IvRequesterDomain
    {
        public vRequesterDomain(IMasterUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(vRequest parameters)
        {
            return await Uow.Repository<vRequest>().FindByAsync(t => t.BedStatus == false);//0 not available
            /*throw new NotImplementedException();*/
        }

        public async Task<object> GetBy(vRequest parameters)
        {
            return await Uow.Repository<Requester>().SingleAsync(t => t.RequesterId == parameters.RequesterId);
            //throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(vRequest entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vRequest entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vRequest entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vRequest entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vRequest parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vRequest parameters)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvRequesterDomain : ICoreDomain<vRequest,vRequest> { }
}
