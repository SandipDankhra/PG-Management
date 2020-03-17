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
    [Table("Payments",Schema="dbo")]
    public partial class Payment
    {
		#region PaymentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PaymentId Annotations

        public int PaymentId { get; set; }

		#region PaymentTypeId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PaymentTypeId Annotations

        public PaymentType PaymentTypeId { get; set; }

		#region PaymentAmount Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion PaymentAmount Annotations

        public int PaymentAmount { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

		#region BookBed Annotations

        [InverseProperty("Payment")]
		#endregion BookBed Annotations

        public virtual ICollection<BookBed> BookBed { get; set; }


        public Payment()
        {
			BookBed = new HashSet<BookBed>();
        }
	}
}