using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vInvoiceRecord",Schema="dbo")]
    public partial class vInvoiceRecord
    {
		#region BookBedId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BookBedId Annotations

        public int BookBedId { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string RentalCity { get; set; }


        public int RentalType { get; set; }


        public string locality { get; set; }


        public string Address { get; set; }


        public string FlatName { get; set; }


        public string FlatNumber { get; set; }


        public string RoomSharing { get; set; }


        public int RoomType { get; set; }


        public string RoomNumber { get; set; }


        public int BedId { get; set; }


        public int BedPrice { get; set; }


        public int RentalId { get; set; }


        public int BedNumber { get; set; }


        public System.DateTime StartDate { get; set; }


        public System.DateTime EndDate { get; set; }


        public Nullable<System.DateTimeOffset> CreateDate { get; set; }


        public string Email { get; set; }


        public vInvoiceRecord()
        {
        }
	}
}