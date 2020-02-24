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
    [Table("Menus",Schema="dbo")]
    public partial class Menu
    {
		#region Day Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Day Annotations

        public int Day { get; set; }

		#region BreakFast Annotations

        [Required]
        [MaxLength(50)]
		#endregion BreakFast Annotations

        public string BreakFast { get; set; }

		#region Lunch Annotations

        [Required]
        [MaxLength(50)]
		#endregion Lunch Annotations

        public string Lunch { get; set; }

		#region Dinner Annotations

        [Required]
        [MaxLength(50)]
		#endregion Dinner Annotations

        public string Dinner { get; set; }


        public Menu()
        {
        }
	}
}