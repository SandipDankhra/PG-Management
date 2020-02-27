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
    [Table("Auth",Schema="dbo")]
    public partial class Auth
    {
		#region AuthId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion AuthId Annotations

        public int AuthId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region AuthOtp Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion AuthOtp Annotations

        public int AuthOtp { get; set; }

		#region CurrentDateTime Annotations

        [Required]
		#endregion CurrentDateTime Annotations

        public System.DateTimeOffset CurrentDateTime { get; set; }

		#region ExpiryDateTime Annotations

        [Required]
		#endregion ExpiryDateTime Annotations

        public System.DateTimeOffset ExpiryDateTime { get; set; }

		#region User Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(PGManagement.Models.Main.User.Auth))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public Auth()
        {
        }
	}
}