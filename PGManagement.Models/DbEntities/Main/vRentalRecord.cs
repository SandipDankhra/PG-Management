using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vRentalRecord",Schema="dbo")]
    public partial class vRentalRecord
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
        public int UserId { get; set; }

        public string RentalCity { get; set; }

        #region RentalType Annotations

        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[System.ComponentModel.DataAnnotations.Key]
        #endregion RentalType Annotations

        public int RentalType { get; set; }

        
        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string Email { get; set; }


        public decimal MobileNumber { get; set; }


              
        public int RentalId { get; set; }

      

        public vRentalRecord()
        {
        }
	}
}