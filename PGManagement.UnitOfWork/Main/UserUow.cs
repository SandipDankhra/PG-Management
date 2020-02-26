using RxWeb.Core.Data;
using PGManagement.BoundedContext.Main;

namespace PGManagement.UnitOfWork.Main
{
    public class UserUow : BaseUow, IUserUow
    {
        public UserUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IUserUow : ICoreUnitOfWork { }
}


