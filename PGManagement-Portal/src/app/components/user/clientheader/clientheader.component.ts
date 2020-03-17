import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { anonymous, route } from '@rxweb/angular-router'
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@app/models';

import { RxHttp, http } from '@rxweb/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';

@Component({
    selector: "app-clientheader",
    templateUrl: './clientheader.component.html',

})
export class clientheaderComponent implements OnInit, OnDestroy {
    registration: User;

    result: any;
    subscription: Subscription;

    isLogin: boolean = true;

    constructor(private activateroute: ActivatedRoute, private browserStorage: BrowserStorage, private router: Router) {

    }

    ngOnInit(): void {
        var auth = this.browserStorage.local.get('auth', false);
        if (auth) {
            this.isLogin = false;
        }
    }

    onLogout() {
        this.browserStorage.local.clearAll();
        location.reload();
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
