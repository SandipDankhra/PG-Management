using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vNotice",Schema="dbo")]
    public partial class vNotice
    {
		#region NoticeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion NoticeId Annotations

        public int NoticeId { get; set; }


        public string NoticeDescription { get; set; }


        public Nullable<int> CreatedBy { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public Nullable<System.DateTimeOffset> CreatedDate { get; set; }


        public vNotice()
        {
        }
	}
}