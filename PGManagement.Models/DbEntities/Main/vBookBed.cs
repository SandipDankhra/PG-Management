using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vBookBed",Schema="dbo")]
    public partial class vBookBed
    {

        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string FlatName { get; set; }


        public string FlatNumber { get; set; }


        public string RoomNumber { get; set; }

		#region BedId Annotations


		#endregion BedId Annotations

        public int BedId { get; set; }


        public int BedPrice { get; set; }


        public System.DateTime EndDate { get; set; }


        public string RentalCity { get; set; }


        public int RentalType { get; set; }


        public string RoomSharing { get; set; }


        public string Email { get; set; }


        public bool BedStatus { get; set; }


        public decimal MobileNumber { get; set; }


        public System.DateTime StartDate { get; set; }


        public int RentalId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
        public int UserId { get; set; }


        public int PaymentTypeId { get; set; }


        public int PaymentAmount { get; set; }


        public int BookBedId { get; set; }


        public vBookBed()
        {
        }
	}
}