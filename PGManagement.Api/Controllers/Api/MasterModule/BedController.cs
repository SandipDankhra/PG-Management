using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.UserModule
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
	
	public class BedController : BaseController<Bed,vBed,Bed>

    {
        public BedController(IMasterUow uow):base(uow) {}

    }
}
