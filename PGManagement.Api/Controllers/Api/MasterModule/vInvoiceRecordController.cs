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
	
	public class vInvoiceRecordController : BaseController<vInvoiceRecord,vInvoiceRecord,vInvoiceRecord>

    {
        public vInvoiceRecordController(IMasterUow uow):base(uow) {}

    }
}
