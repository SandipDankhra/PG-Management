using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
	
	public class MenuController : BaseController<Menu,Menu,Menu>

    {
        public MenuController(IMasterUow uow):base(uow) {}

    }
}
