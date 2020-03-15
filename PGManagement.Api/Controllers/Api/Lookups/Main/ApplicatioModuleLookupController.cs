using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class ApplicatioModuleLookupController : BaseLookupController

    {
        public ApplicatioModuleLookupController(IMasterUow uow):base(uow) {}

        #region Lookups
        [HttpGet("ApplicationModuleLookups")]
        public IQueryable GetRoleLookups()
        {
            return Uow.Repository<ApplicationModule>().Queryable();
        }
        #endregion Lookups
    }
}
