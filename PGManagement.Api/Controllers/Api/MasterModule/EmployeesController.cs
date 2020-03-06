using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.Domain.MasterModule;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;
using PGManagement.Models.ViewModels;

namespace PGManagement.Api.Controllers.MasterModule
{
    
    [ApiController]
    [Route("api/[controller]")]
   
	
	public class EmployeesController : BaseDomainController<EmployeeCreate, vEmployeeRec>

    {
        public EmployeesController(IEmployeeDomain domain):base(domain) {}

    }
}
