using RxWeb.Core.Data;
using PGManagement.BoundedContext.Main;

namespace PGManagement.UnitOfWork.Main
{
    public class MasterUow : BaseUow, IMasterUow
    {
        public MasterUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }

    }
    public interface IMasterUow : ICoreUnitOfWork { }
}


