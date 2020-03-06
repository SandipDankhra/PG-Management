using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.Domain.MasterModule;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using PGManagement.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
	
	public class ChangePasswordController : BaseDomainController<ChangePassword, ChangePassword>

    {
        public ChangePasswordController(IChangePasswordDomain domain):base(domain) {}

    }
}
