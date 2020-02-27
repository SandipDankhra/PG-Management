using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.Domain.UserModule;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PGManagement.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class RegistrationController : BaseDomainController<User, User>

    {
        public RegistrationController(IRegistrationDomain domain):base(domain) {}

    }
}
