using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.BoundedContext.SqlContext;
namespace PGManagement.Models.Main
{
    [Table("vRequestLookup",Schema="dbo")]
    public partial class vRequestLookup
    {

        public string Expr11 { get; set; }


        public string Expr12 { get; set; }

		#region Expr6 Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Expr6 Annotations

        public int Expr6 { get; set; }


        public string Expr7 { get; set; }


        public int Expr1 { get; set; }


        public bool Expr2 { get; set; }


        public string Expr8 { get; set; }


        public string Expr13 { get; set; }


        public string Expr14 { get; set; }


        public int Expr3 { get; set; }


        public int Expr4 { get; set; }


        public int Expr5 { get; set; }


        public int Expr9 { get; set; }


        public int Expr10 { get; set; }


        public vRequestLookup()
        {
        }
	}
}