using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.Models.Enums.Main;
using PGManagement.BoundedContext.SqlContext;
using RxWeb.Core.Sanitizers.Enums;

namespace PGManagement.Models.Main
{
    [Table("Requesters",Schema="dbo")]
    public partial class Requester
    {
		#region RequesterId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RequesterId Annotations

        public int RequesterId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [OnAction("POST", ActionValueType.NameClaimIdentifier)]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region BedId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Beds","dbo","","BedId")]
		#endregion BedId Annotations

        public int BedId { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

		#region Bed Annotations

        [ForeignKey(nameof(BedId))]
        [InverseProperty(nameof(PGManagement.Models.Main.Bed.Requesters))]
		#endregion Bed Annotations

        public virtual Bed Bed { get; set; }

		#region User Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(PGManagement.Models.Main.User.Requesters))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public Requester()
        {
        }
	}
}