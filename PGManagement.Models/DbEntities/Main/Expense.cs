//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations.Schema;
//using RxWeb.Core.Annotations;
//using RxWeb.Core.Data.Annotations;
//using RxWeb.Core.Sanitizers;
//using PGManagement.Models.Enums.Main;
//using PGManagement.BoundedContext.SqlContext;
//using RxWeb.Core.Sanitizers.Enums;

//namespace PGManagement.Models.Main
//{
//    [Table("Expenses", Schema = "dbo")]
//    public partial class Expense
//    {
//        #region ExpenseId Annotations

//        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
//        [System.ComponentModel.DataAnnotations.Key]
//        #endregion ExpenseId Annotations

//        public int ExpenseId { get; set; }

//        #region ExpenseType Annotations

//        [Required]
//        [MaxLength(50)]
//        #endregion ExpenseType Annotations

//        public string ExpenseType { get; set; }

//        #region ExpenseAmount Annotations

//        [Range(1, int.MaxValue)]
//        [Required]
//        #endregion ExpenseAmount Annotations

//        public int ExpenseAmount { get; set; }

//        #region ExpenseDetails Annotations

//        [Required]
//        #endregion ExpenseDetails Annotations

//        public string ExpenseDetails { get; set; }

//        #region ExpenseDate Annotations

//        [Required]
//        #endregion ExpenseDate Annotations

//        public System.DateTime ExpenseDate { get; set; }

//        #region EmployeeId Annotations

//        [Range(1, int.MaxValue)]
//        [Required]
//        [RelationshipTableAttribue("Users", "dbo", "", "EmployeeId")]
//        [OnAction("POST", ActionValueType.NameClaimIdentifier)]
//        #endregion EmployeeId Annotations

//        public int EmployeeId { get; set; }

//        #region User Annotations

//        [ForeignKey(nameof(EmployeeId))]
//        [InverseProperty(nameof(PGManagement.Models.Main.User.Expenses))]
//        #endregion User Annotations

//        public virtual User User { get; set; }


//        public Expense()
//        {
//        }
//    }
//}