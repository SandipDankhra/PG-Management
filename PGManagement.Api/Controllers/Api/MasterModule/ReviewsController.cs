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
    
	//[Access(1)]
	public class ReviewsController : BaseController<Review,Review,Review>

    {
        public ReviewsController(IMasterUow uow):base(uow) {}

    }
}
