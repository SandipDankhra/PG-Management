using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PGManagement.Models.Enums.Main;
using PGManagement.BoundedContext.SqlContext;
using RxWeb.Core.Sanitizers.Enums;

namespace PGManagement.Models.Main
{
   
    public partial class ChangePassword
    {

        [OnAction("POST", ActionValueType.NameClaimIdentifier)]
        public int UserId { get; set; }
        
        public string OldPassword { get; set; }
	
        public string NewPassword { get; set; }

      
	}
}