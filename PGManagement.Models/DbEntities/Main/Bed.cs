using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.Models.Enums.Main;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("Beds",Schema="dbo")]
    public partial class Bed
    {
		#region BedId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BedId Annotations

        public int BedId { get; set; }

		#region RoomId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Rooms","dbo","","RoomId")]
		#endregion RoomId Annotations

        public int RoomId { get; set; }

		#region BedNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion BedNumber Annotations

        public int BedNumber { get; set; }

		#region BedStatus Annotations

        [Required]
		#endregion BedStatus Annotations

        public bool BedStatus { get; set; }

		#region BedPrice Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion BedPrice Annotations

        public int BedPrice { get; set; }

		#region Room Annotations

        [ForeignKey(nameof(RoomId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Room.Beds))]
		#endregion Room Annotations

        public virtual Room Room { get; set; }

		#region BookBed Annotations

        [InverseProperty("Bed")]
		#endregion BookBed Annotations

        public virtual ICollection<BookBed> BookBed { get; set; }

		#region Requesters Annotations

        [InverseProperty("Bed")]
		#endregion Requesters Annotations

        public virtual ICollection<Requester> Requesters { get; set; }


        public Bed()
        {
			BookBed = new HashSet<BookBed>();
			Requesters = new HashSet<Requester>();
        }
	}
}