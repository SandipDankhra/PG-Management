using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PGManagement.Models.Main
{
    public partial class vEmployee
    {
        [NotMapped]
        public string employeePassword { get; set; }
    }
}
