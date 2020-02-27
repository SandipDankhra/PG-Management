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
    [Table("Authentication",Schema="dbo")]
    public partial class Authentication
    {
		#region AuthenticationId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion AuthenticationId Annotations

        public int AuthenticationId { get; set; }

		#region UserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region Otp Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Otp Annotations

        public int Otp { get; set; }

		#region GeneratedDateTime Annotations

        [Required]
		#endregion GeneratedDateTime Annotations

        public System.DateTimeOffset GeneratedDateTime { get; set; }

		#region ExpiryDateTime Annotations

        [Required]
		#endregion ExpiryDateTime Annotations

        public System.DateTimeOffset ExpiryDateTime { get; set; }

		#region User Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(PGManagement.Models.Main.User.Authentication))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public Authentication()
        {
        }
	}
}