using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PGManagement.UnitOfWork.Main;
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
	
	public class ExpenseController : BaseController<Expense,vExpense, Expense>

    {
        public ExpenseController(IMasterUow uow):base(uow) {}

    }
}
