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
		#region UserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserId Annotations

        public int UserId { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public int ExpenseAmount { get; set; }


        public string ExpenseType { get; set; }


        public string ExpenseDetails { get; set; }


        public decimal MobileNumber { get; set; }


        public System.DateTime ExpenseDate { get; set; }


        public int ExpenseId { get; set; }


        public vExpense()
        {
        }
	}
}