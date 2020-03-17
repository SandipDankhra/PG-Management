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
    [Table("Notice",Schema="dbo")]
    public partial class Notice
    {
		#region NoticeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion NoticeId Annotations

        public int NoticeId { get; set; }

		#region NoticeDescription Annotations

        [Required]
		#endregion NoticeDescription Annotations

        public string NoticeDescription { get; set; }


        public Nullable<System.DateTimeOffset> CreatedDate { get; set; }

		#region CreatedBy Annotations

        [OnAction("POST", ActionValueType.NameClaimIdentifier)]
        [RelationshipTableAttribue("Users","dbo","","CreatedBy")]
		#endregion CreatedBy Annotations

        public Nullable<int> CreatedBy { get; set; }

		#region User Annotations

        [ForeignKey(nameof(CreatedBy))]
        [InverseProperty(nameof(PGManagement.Models.Main.User.Notice))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public Notice()
        {
        }
	}
}