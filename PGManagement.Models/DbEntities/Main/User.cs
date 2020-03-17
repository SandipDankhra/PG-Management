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

        [Required]
        [MaxLength(50)]
		#endregion FirstName Annotations

        public string FirstName { get; set; }

		#region LastName Annotations

        [Required]
        [MaxLength(50)]
		#endregion LastName Annotations

        public string LastName { get; set; }

		#region MobileNumber Annotations

        [Required]
		#endregion MobileNumber Annotations

        public decimal MobileNumber { get; set; }

		#region Email Annotations

        [Required]
        [MaxLength(50)]
		#endregion Email Annotations

        public string Email { get; set; }


        public Nullable<int> ApplicationLocaleId { get; set; }


        public Nullable<int> ApplicationTimeZoneId { get; set; }

		#region LanguageCode Annotations

        [MaxLength(3)]
		#endregion LanguageCode Annotations

        public string LanguageCode { get; set; }

		#region Password Annotations

        [MaxLength(132)]
		#endregion Password Annotations

        public byte[] Password { get; set; }

		#region Salt Annotations

        [MaxLength(140)]
		#endregion Salt Annotations

        public byte[] Salt { get; set; }


        public Nullable<bool> LoginBlocked { get; set; }


        public Status StatusId { get; set; }


        public Nullable<bool> SoftDelete { get; set; }

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

		#region Authentication Annotations

        [InverseProperty("User")]
		#endregion Authentication Annotations

        public virtual ICollection<Authentication> Authentication { get; set; }

		#region Complaints Annotations

        [InverseProperty("User")]
		#endregion Complaints Annotations

        public virtual ICollection<Complaint> Complaints { get; set; }

		#region Notice Annotations

        [InverseProperty("User")]
		#endregion Notice Annotations

        public virtual ICollection<Notice> Notice { get; set; }

		#region Employees Annotations

        [InverseProperty("User")]
		#endregion Employees Annotations

        public virtual ICollection<Employee> Employees { get; set; }

		#region Expenses Annotations

        [InverseProperty("User")]
		#endregion Expenses Annotations

        public virtual ICollection<Expens> Expenses { get; set; }

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
			Authentication = new HashSet<Authentication>();
			Complaints = new HashSet<Complaint>();
			Notice = new HashSet<Notice>();
			Employees = new HashSet<Employee>();
			Expenses = new HashSet<Expens>();
			Documents = new HashSet<Document>();
			Requesters = new HashSet<Requester>();
        }
	}
}