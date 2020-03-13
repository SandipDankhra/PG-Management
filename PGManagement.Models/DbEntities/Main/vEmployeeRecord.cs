using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vEmployeeRecord",Schema="dbo")]
    public partial class vEmployeeRecord
    {

        public string FirstName { get; set; }


        public string LastName { get; set; }

		#region Salary Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Salary Annotations

        public int Salary { get; set; }


        public string RoleName { get; set; }


        public string DocumentUrl { get; set; }


        public System.DateTimeOffset JoinDate { get; set; }


        public string Email { get; set; }


        public Nullable<decimal> MobileNumber { get; set; }


        public string ApplicationObjectName { get; set; }


        public vEmployeeRecord()
        {
        }
	}
}