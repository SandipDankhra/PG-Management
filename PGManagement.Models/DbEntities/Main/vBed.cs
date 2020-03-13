using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vBeds",Schema="dbo")]
    public partial class vBed
    {
		#region FlatId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FlatId Annotations

        public int FlatId { get; set; }


        public string FlatNumber { get; set; }


        public int RoomId { get; set; }


        public string RoomNumber { get; set; }


        public int BedId { get; set; }


        public int BedNumber { get; set; }


        public bool BedStatus { get; set; }


        public int BedPrice { get; set; }


        public string FlatName { get; set; }


        public vBed()
        {
        }
	}
}