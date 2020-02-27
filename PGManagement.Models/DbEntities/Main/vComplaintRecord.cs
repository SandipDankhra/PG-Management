using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vComplaintRecord",Schema="dbo")]
    public partial class vComplaintRecord
    {

        public string FirstName { get; set; }


        public string LastName { get; set; }

		#region ComplaintId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ComplaintId Annotations

        public int ComplaintId { get; set; }


        public string ComplaintName { get; set; }


        public string ComplaintDescription { get; set; }


        public bool ComplaintStatus { get; set; }


        public vComplaintRecord()
        {
        }
	}
}