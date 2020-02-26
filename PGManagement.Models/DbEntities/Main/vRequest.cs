using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vRequest",Schema="dbo")]
    public partial class vRequest
    {

        public string locality { get; set; }


        public string FlatNumber { get; set; }

		#region RoomType Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RoomType Annotations

        public int RoomType { get; set; }


        public string RoomSharing { get; set; }


        public int BedId { get; set; }


        public bool BedStatus { get; set; }


        public vRequest()
        {
        }
	}
}