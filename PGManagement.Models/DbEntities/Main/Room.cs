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
    [Table("Rooms",Schema="dbo")]
    public partial class Room
    {
		#region RoomId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RoomId Annotations

        public int RoomId { get; set; }

		#region FlatId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Flats","dbo","","FlatId")]
		#endregion FlatId Annotations

        public int FlatId { get; set; }

		#region RoomNumber Annotations

        [Required]
        [MaxLength(50)]
		#endregion RoomNumber Annotations

        public string RoomNumber { get; set; }

		#region RoomType Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion RoomType Annotations

        public RoomType RoomType { get; set; }

		#region RoomSharing Annotations

        [Required]
        [MaxLength(50)]
		#endregion RoomSharing Annotations

        public string RoomSharing { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

		#region Flat Annotations

        [ForeignKey(nameof(FlatId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Flat.Rooms))]
		#endregion Flat Annotations

        public virtual Flat Flat { get; set; }


        public Room()
        {
        }
	}
}