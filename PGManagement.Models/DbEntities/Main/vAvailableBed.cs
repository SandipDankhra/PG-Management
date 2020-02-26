using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vAvailableBeds",Schema="dbo")]
    public partial class vAvailableBed
    {
		#region BedId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BedId Annotations

        public int BedId { get; set; }


        public int BedNumber { get; set; }


        public bool BedStatus { get; set; }


        public int BedPrice { get; set; }


        public string RoomNumber { get; set; }


        public string FlatNumber { get; set; }


        public string FlatName { get; set; }


        public string Address { get; set; }


        public string locality { get; set; }


        public int RoomType { get; set; }


        public string RoomSharing { get; set; }


        public int FlatId { get; set; }


        public int RoomId { get; set; }


        public int RoomsRoomId { get; set; }


        public int FlatsFlatId { get; set; }


        public vAvailableBed()
        {
        }
	}
}