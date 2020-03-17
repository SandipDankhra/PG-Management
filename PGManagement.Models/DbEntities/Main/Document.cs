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
    [Table("Documents",Schema="dbo")]
    public partial class Document
    {
		#region DocumentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion DocumentId Annotations

        public int DocumentId { get; set; }

		#region DocumentTypeId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion DocumentTypeId Annotations

        public DocumentType DocumentTypeId { get; set; }

		#region DocumentUrl Annotations

        [Required]
        [MaxLength(50)]
		#endregion DocumentUrl Annotations

        public string DocumentUrl { get; set; }

		#region UploadDateTime Annotations

        [Required]
		#endregion UploadDateTime Annotations

        public System.DateTimeOffset UploadDateTime { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [OnAction("POST", ActionValueType.NameClaimIdentifier)]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

		#region User Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(PGManagement.Models.Main.User.Documents))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public Document()
        {
        }
	}
}