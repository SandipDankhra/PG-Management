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
    [AllowAnonymous]
	
	public class BedController : BaseController<Bed,Bed,Bed>

    {
        public BedController(IMasterUow uow):base(uow) {}

    }
}
