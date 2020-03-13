using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vRooms",Schema="dbo")]
    public partial class vRoom
    {
		#region FlatId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FlatId Annotations

        public int FlatId { get; set; }


        public string FlatNumber { get; set; }


        public string RoomNumber { get; set; }


        public string RoomSharing { get; set; }


        public int RoomType { get; set; }


        public string FlatName { get; set; }


        public string locality { get; set; }
        
        public int roomId { get; set; } 


        public vRoom()
        {
        }
	}
}