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
    [Table("Users",Schema="dbo")]
    public partial class User
    {
		#region UserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region FirstName Annotations

        [MaxLength(50)]
		#endregion FirstName Annotations

        public string FirstName { get; set; }

		#region LastName Annotations

        [MaxLength(50)]
		#endregion LastName Annotations

        public string LastName { get; set; }


        public Nullable<decimal> MobileNumber { get; set; }

		#region Email Annotations

        [MaxLength(50)]
		#endregion Email Annotations

        public string Email { get; set; }

		#region ApplicationLocaleId Annotations

        [Range(1, int.MaxValue)]
        [Required]
		#endregion ApplicationLocaleId Annotations

        public int ApplicationLocaleId { get; set; }

		#region ApplicationTimeZoneId Annotations

        [Range(1, int.MaxValue)]
        [Required]
		#endregion ApplicationTimeZoneId Annotations

        public int ApplicationTimeZoneId { get; set; }

		#region LanguageCode Annotations

        [Required]
        [MaxLength(3)]
		#endregion LanguageCode Annotations

        public string LanguageCode { get; set; }

		#region Password Annotations

        [Required]
        [MaxLength(132)]
		#endregion Password Annotations

        public byte[] Password { get; set; }

		#region Salt Annotations

        [Required]
        [MaxLength(140)]
		#endregion Salt Annotations

        public byte[] Salt { get; set; }

		#region LoginBlocked Annotations

        [Required]
		#endregion LoginBlocked Annotations

        public bool LoginBlocked { get; set; }

		#region StatusId Annotations

        [Range(1, int.MaxValue)]
        [Required]
		#endregion StatusId Annotations

        public Status StatusId { get; set; }


        public Nullable<bool> CanLogin { get; set; }

		#region Rentals Annotations

        [InverseProperty("User")]
		#endregion Rentals Annotations

        public virtual ICollection<Rental> Rentals { get; set; }

		#region ApplicationUserTokens Annotations

        [InverseProperty("User")]
		#endregion ApplicationUserTokens Annotations

        public virtual ICollection<ApplicationUserToken> ApplicationUserTokens { get; set; }

		#region UserRoles Annotations

        [InverseProperty("User")]
		#endregion UserRoles Annotations

        public virtual ICollection<UserRole> UserRoles { get; set; }

		#region Employees Annotations

        [InverseProperty("User")]
		#endregion Employees Annotations

        public virtual ICollection<Employee> Employees { get; set; }

		#region Documents Annotations

        [InverseProperty("User")]
		#endregion Documents Annotations

        public virtual ICollection<Document> Documents { get; set; }

		#region Requesters Annotations

        [InverseProperty("User")]
		#endregion Requesters Annotations

        public virtual ICollection<Requester> Requesters { get; set; }


        public User()
        {
			Rentals = new HashSet<Rental>();
			ApplicationUserTokens = new HashSet<ApplicationUserToken>();
			UserRoles = new HashSet<UserRole>();
			Employees = new HashSet<Employee>();
			Documents = new HashSet<Document>();
			Requesters = new HashSet<Requester>();
        }
	}
}