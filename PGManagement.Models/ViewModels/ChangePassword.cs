using RxWeb.Core.Sanitizers;
using RxWeb.Core.Sanitizers.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace PGManagement.Models.ViewModels
{
    public  class ChangePassword
    {

        [OnAction("GET", ActionValueType.NameClaimIdentifier)]
        public int UserId { get; set; }

        public string OldPassword { get; set; }

        public string NewPassword { get; set; }


    }
}
