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
    [Table("Expenses",Schema="dbo")]
    public partial class Expens
    {
		#region ExpenseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ExpenseId Annotations

        public int ExpenseId { get; set; }

		#region ExpenseType Annotations

        [Required]
        [MaxLength(50)]
		#endregion ExpenseType Annotations

        public string ExpenseType { get; set; }

		#region ExpenseAmount Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ExpenseAmount Annotations

        public int ExpenseAmount { get; set; }

		#region ExpenseDetails Annotations

        [Required]
		#endregion ExpenseDetails Annotations

        public string ExpenseDetails { get; set; }

		#region ExapenseDate Annotations

        [Required]
		#endregion ExapenseDate Annotations

        public System.DateTime ExapenseDate { get; set; }

		#region EmployeeId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Employees","dbo","","EmployeeId")]
		#endregion EmployeeId Annotations

        public int EmployeeId { get; set; }

		#region Employee Annotations

        [ForeignKey(nameof(EmployeeId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Employee.Expenses))]
		#endregion Employee Annotations

        public virtual Employee Employee { get; set; }


        public Expens()
        {
        }
	}
}