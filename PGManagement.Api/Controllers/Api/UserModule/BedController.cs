using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PGManagement.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class BedController : BaseController<Bed,Bed,Bed>

    {
        public BedController(IUserUow uow):base(uow) {}

    }
}
