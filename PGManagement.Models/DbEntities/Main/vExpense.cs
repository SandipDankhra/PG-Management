using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vExpense",Schema="dbo")]
    public partial class vExpense
    {
		#region ExpenseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ExpenseId Annotations

        public int ExpenseId { get; set; }


        public string ExpenseType { get; set; }


        public int ExpenseAmount { get; set; }


        public string ExpenseDetails { get; set; }


        public System.DateTime ExpenseDate { get; set; }


        public int EmployeeId { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public int UserId { get; set; }


        public vExpense()
        {
        }
	}
}