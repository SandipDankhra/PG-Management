using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;

using PGManagement.Models.ViewModels;
using PGManagement.BoundedContext.SqlContext;
using Microsoft.AspNetCore.Authorization;

namespace PGManagement.Api.Controllers.MasterModule
{
    
    [ApiController]
	[Route("api/[controller]")]
    public class SearchExpenseController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchExpenseController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[2];
            spParameters[0] = new SqlParameter() { ParameterName = "startDate", Value = searchParams["startDate"] };
            spParameters[1] = new SqlParameter() { ParameterName = "lastDate", Value = searchParams["lastDate"] };
            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].[spExpenseSearch]", spParameters);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
}
