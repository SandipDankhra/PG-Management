import { Component, OnInit } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { UserAuthentication } from '../../models/custom-models/user.model';
import { CoreComponent } from '@rxweb/angular-router';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { LoggedInMiddleware } from '../../domain/security/middleware/logged-in.middleware';
import {RxHttp, http} from '@rxweb/http';
import { Router } from '@angular/router';


@http({
    hostKey:'server',
    path:'api/Authentication',
})

@middleware([LoggedInMiddleware])
@multilingual("loginComponent")
@anonymous()
@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent extends CoreComponent implements OnInit {

    loginFormGroup: IFormGroup<UserAuthentication>;

    constructor(private formBuilder: RxFormBuilder, private http: RxHttp,private router:Router) {
        super();
    }

    ngOnInit(): void {
        this.loginFormGroup = this.formBuilder.formGroup(UserAuthentication) as IFormGroup<UserAuthentication>;
    }
    
    loginUser(){
        console.log("hello");
    }
}
