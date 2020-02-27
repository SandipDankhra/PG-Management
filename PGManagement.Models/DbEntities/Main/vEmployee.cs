using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vEmployees",Schema="dbo")]
    public partial class vEmployee
    {

        public string FirstName { get; set; }


        public string LastName { get; set; }

		#region Salary Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Salary Annotations

        public int Salary { get; set; }


        public System.DateTimeOffset JoinDate { get; set; }


        public string RoleName { get; set; }


        public string Email { get; set; }


        public Nullable<bool> CanLogin { get; set; }


        public Nullable<decimal> MobileNumber { get; set; }


        public vEmployee()
        {
        }
	}
}