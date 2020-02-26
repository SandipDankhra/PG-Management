using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vInvoiceRecords",Schema="dbo")]
    public partial class vInvoiceRecord
    {

        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string RentalCity { get; set; }

		#region RentalType Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RentalType Annotations

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


        public vInvoiceRecord()
        {
        }
	}
}