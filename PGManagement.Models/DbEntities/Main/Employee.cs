using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.Models.Enums.Main;
using PGManagement.BoundedContext.SqlContext;
using RxWeb.Core.Sanitizers.Enums;

namespace PGManagement.Models.Main
{
    [Table("Employees",Schema="dbo")]
    public partial class Employee
    {
		#region EmployeeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion EmployeeId Annotations

        public int EmployeeId { get; set; }

		#region Salary Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Salary Annotations

        public int Salary { get; set; }

		#region JoinDate Annotations

        [Required]
		#endregion JoinDate Annotations

        public System.DateTimeOffset JoinDate { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [OnAction("POST", ActionValueType.NameClaimIdentifier)]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

		#region User Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(PGManagement.Models.Main.User.Employees))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public Employee()
        {
        }
	}
}