using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.Domain.MasterModule;
using PGManagement.Models.ViewModels;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using PGManagement.Models.Main;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class CreateBookBedController : BaseDomainController<CreateBookBed, CreateBookBed>

    {
        public CreateBookBedController(ICreateBookBedDomain domain):base(domain) {}

    }
}
