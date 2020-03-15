using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.Models.Enums.Main;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("ApplicationModules",Schema="dbo")]
    public partial class ApplicationModule
    {
		#region ApplicationModuleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ApplicationModuleId Annotations

        public int ApplicationModuleId { get; set; }

		#region ApplicationModuleName Annotations

        [MaxLength(50)]
		#endregion ApplicationModuleName Annotations

        public string ApplicationModuleName { get; set; }

		#region ModuleMasterId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("ModuleMasters","dbo","","ModuleMasterId")]
		#endregion ModuleMasterId Annotations

        public int ModuleMasterId { get; set; }


        public Nullable<int> ParentApplicationModuleId { get; set; }

		#region ModuleMaster Annotations

        [ForeignKey(nameof(ModuleMasterId))]
        [InverseProperty(nameof(PGManagement.Models.Main.ModuleMaster.ApplicationModules))]
		#endregion ModuleMaster Annotations

        public virtual ModuleMaster ModuleMaster { get; set; }

		#region RolePermissions Annotations

        [InverseProperty("ApplicationModule")]
		#endregion RolePermissions Annotations

        public virtual ICollection<RolePermission> RolePermissions { get; set; }


        public ApplicationModule()
        {
			RolePermissions = new HashSet<RolePermission>();
        }
	}
}