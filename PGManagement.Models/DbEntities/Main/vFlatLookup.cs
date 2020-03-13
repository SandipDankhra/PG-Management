using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vFlatLookup",Schema="dbo")]
    public partial class vFlatLookup
    {
		#region FlatId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FlatId Annotations

        public int FlatId { get; set; }


        public string FlatName { get; set; }


        public vFlatLookup()
        {
        }
	}
}