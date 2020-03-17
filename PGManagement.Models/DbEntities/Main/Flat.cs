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
    [Table("Flats",Schema="dbo")]
    public partial class Flat
    {
		#region FlatId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FlatId Annotations

        public int FlatId { get; set; }

		#region FlatNumber Annotations

        [Required]
        [MaxLength(50)]
		#endregion FlatNumber Annotations

        public string FlatNumber { get; set; }

		#region FlatName Annotations

        [Required]
        [MaxLength(50)]
		#endregion FlatName Annotations

        public string FlatName { get; set; }

		#region Address Annotations

        [Required]
		#endregion Address Annotations

        public string Address { get; set; }

		#region locality Annotations

        [Required]
        [MaxLength(50)]
		#endregion locality Annotations

        public string locality { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

		#region Rooms Annotations

        [InverseProperty("Flat")]
		#endregion Rooms Annotations

        public virtual ICollection<Room> Rooms { get; set; }


        public Flat()
        {
			Rooms = new HashSet<Room>();
        }
	}
}