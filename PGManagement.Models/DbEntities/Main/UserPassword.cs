using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PGManagement.Models.Main
{
    public partial class User
    {
        [NotMapped]
        public string userPassword { get; set; }
    }
    public partial class Authentication
    {
        [NotMapped]
        public string userPassword { get; set; }
    }
}
