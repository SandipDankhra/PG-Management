using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vRentalRecords",Schema="dbo")]
    public partial class vRentalRecord
    {

        public string RoleName { get; set; }


        public string RentalCity { get; set; }

		#region RentalType Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RentalType Annotations

        public int RentalType { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string Email { get; set; }


        public string DocumentUrl { get; set; }


        public string RoomNumber { get; set; }


        public int RoomType { get; set; }


        public string Address { get; set; }


        public int BedPrice { get; set; }


        public string FlatNumber { get; set; }


        public string FlatName { get; set; }


        public int BedId { get; set; }


        public string RoomSharing { get; set; }


        public System.DateTime EndDate { get; set; }


        public string ApplicationObjectName { get; set; }


        public Nullable<decimal> MobileNumber { get; set; }


        public int DocumentTypeId { get; set; }


        public System.DateTimeOffset UploadDateTime { get; set; }


        public System.DateTime StartDate { get; set; }


        public int PaymentTypeId { get; set; }


        public int PaymentAmount { get; set; }


        public vRentalRecord()
        {
        }
	}
}