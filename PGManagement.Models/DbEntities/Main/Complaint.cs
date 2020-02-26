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
    [Table("Complaints",Schema="dbo")]
    public partial class Complaint
    {
		#region ComplaintId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ComplaintId Annotations

        public int ComplaintId { get; set; }

		#region ComplaintName Annotations

        [Required]
        [MaxLength(50)]
		#endregion ComplaintName Annotations

        public string ComplaintName { get; set; }

		#region ComplaintDescription Annotations

        [Required]
		#endregion ComplaintDescription Annotations

        public string ComplaintDescription { get; set; }

		#region RentalId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Rentals","dbo","","RentalId")]
		#endregion RentalId Annotations

        public int RentalId { get; set; }

		#region ComplaintStatus Annotations

        [Required]
		#endregion ComplaintStatus Annotations

        public bool ComplaintStatus { get; set; }

		#region Rental Annotations

        [ForeignKey(nameof(RentalId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Rental.Complaints))]
		#endregion Rental Annotations

        public virtual Rental Rental { get; set; }


        public Complaint()
        {
        }
	}
}