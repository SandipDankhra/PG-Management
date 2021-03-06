using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vEmployeeRec",Schema="dbo")]
    public partial class vEmployeeRec
    {
		#region Salary Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Salary Annotations

        public int Salary { get; set; }


        public System.DateTimeOffset JoinDate { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public decimal MobileNumber { get; set; }


        public string Email { get; set; }


        public Nullable<int> StatusId { get; set; }


        public Nullable<bool> LoginBlocked { get; set; }


        public int EmployeeId { get; set; }


        public int UserId { get; set; }


        public vEmployeeRec()
        {
        }
	}
}