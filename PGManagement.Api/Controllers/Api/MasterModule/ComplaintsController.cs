using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    
	
	public class ComplaintsController : BaseController<Complaint,vComplaintRecord,Complaint>
    {
        public ComplaintsController(IMasterUow uow):base(uow) {}

    }
}
