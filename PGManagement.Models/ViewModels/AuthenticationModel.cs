using System.ComponentModel.DataAnnotations;

namespace PGManagement.Models.ViewModels
{

    public partial class AuthenticationModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}

