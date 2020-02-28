using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PGManagement.Models.ViewModels
{
    public class CreateBookBed
    {
        public int BedId { get; set; }

        public int RentalId { get; set; }
        public int BookBedId { get; set; }

        public System.DateTime EndDate { get; set; }


        public string RentalCity { get; set; }


        public int RentalType { get; set; }


        public System.DateTime StartDate { get; set; }


        public int UserId { get; set; }


        public int PaymentTypeId { get; set; }


        public int PaymentAmount { get; set; }


    }
}
