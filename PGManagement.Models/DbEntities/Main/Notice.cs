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
    [Table("Notice",Schema="dbo")]
    public partial class Notice
    {
		#region NoticeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
        #endregion NoticeId Annotations

        public int NoticeId { get; set; }


        public string NoticeDescription { get; set; }

        [OnAction("POST",RxWeb.Core.Sanitizers.Enums.ActionValueType.DateTimeOffsetUtc)]
        public Nullable<System.DateTimeOffset> CreatedDate { get; set; }

        [OnAction("POST", RxWeb.Core.Sanitizers.Enums.ActionValueType.NameClaimIdentifier)]
        public Nullable<int> CreatedBy { get; set; }


        public Notice()
        {
        }
	}
}