using Microsoft.AspNetCore.Mvc;
using System.Linq;

using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using PGManagement.Domain.MasterModule;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]

    public class vRequesterController : BaseDomainController<vRequest,vRequest>

    {
        public vRequesterController(IvRequesterDomain domain):base(domain) {}

    }
}
