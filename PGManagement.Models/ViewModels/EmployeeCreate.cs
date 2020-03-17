using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace PGManagement.Models.ViewModels
{
    public partial class EmployeeCreate
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }


        [Required]
        public int Salary { get; set; }

        [Required]
        public DateTime JoinDate { get; set; }

       
        //[Required]
        //public string RoleName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public decimal MobileNumber { get; set; }

        public string employeePassword { get; set; }

        [Required]
        public bool LoginBlocked { get; set; }
        [Required]
        public int StatusId { get; set; }


        public int EmployeeId { get; set; }




    }
}
