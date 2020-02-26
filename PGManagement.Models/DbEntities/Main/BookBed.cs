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
    [Table("BookBed",Schema="dbo")]
    public partial class BookBed
    {
		#region BookBedId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BookBedId Annotations

        public int BookBedId { get; set; }

		#region BedId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion BedId Annotations

        public int BedId { get; set; }

		#region RentalId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Rentals","dbo","","RentalId")]
		#endregion RentalId Annotations

        public int RentalId { get; set; }

		#region PaymentId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Payments","dbo","","PaymentId")]
		#endregion PaymentId Annotations

        public int PaymentId { get; set; }


        public Nullable<System.DateTimeOffset> CreateDate { get; set; }

		#region StartDate Annotations

        [Required]
		#endregion StartDate Annotations

        public System.DateTime StartDate { get; set; }

		#region EndDate Annotations

        [Required]
		#endregion EndDate Annotations

        public System.DateTime EndDate { get; set; }

		#region Payment Annotations

        [ForeignKey(nameof(PaymentId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Payment.BookBed))]
		#endregion Payment Annotations

        public virtual Payment Payment { get; set; }

		#region Rental Annotations

        [ForeignKey(nameof(RentalId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Rental.BookBed))]
		#endregion Rental Annotations

        public virtual Rental Rental { get; set; }


        public BookBed()
        {
        }
	}
}