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
	
	public class vRoomLookupController : BaseLookupController

    {
        public vRoomLookupController(IMasterUow uow):base(uow) {}

        #region Lookups
        #endregion Lookups
    }
}
