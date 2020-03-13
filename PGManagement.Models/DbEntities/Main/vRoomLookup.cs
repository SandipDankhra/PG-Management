using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vRoomLookup",Schema="dbo")]
    public partial class vRoomLookup
    {
		#region RoomId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RoomId Annotations

        public int RoomId { get; set; }


        public int FlatId { get; set; }


        public string RoomNumber { get; set; }


        public vRoomLookup()
        {
        }
	}
}