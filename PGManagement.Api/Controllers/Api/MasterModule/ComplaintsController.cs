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
    [Access(1)]

    public class ComplaintsController : BaseController<Complaint,Complaint,Complaint>

    {
        public ComplaintsController(IMasterUow uow):base(uow) {}

    }
}
