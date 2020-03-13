using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PGManagement.Models.Main
{
    public partial class Authentication
    {
        [NotMapped]
        public decimal MobileNumber { get; set; }
    }
}
