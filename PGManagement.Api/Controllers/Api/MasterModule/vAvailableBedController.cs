using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.Domain.MasterModule;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class vAvailableBedController : BaseDomainController<vAvailableBed, vAvailableBed>

    {
        public vAvailableBedController(IvAvailableBedDomain domain):base(domain) {}

    }
}
