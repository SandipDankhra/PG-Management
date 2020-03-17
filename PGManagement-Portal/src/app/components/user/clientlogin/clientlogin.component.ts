import { Component, OnInit } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { UserAuthentication } from '../../../models/custom-models/user.model';
import { CoreComponent } from '@rxweb/angular-router';
import { RxFormBuilder, IFormGroup, RxwebValidators, RxFormGroup } from '@rxweb/reactive-form-validators';
import { LoggedInMiddleware } from '../../../domain/security/middleware/logged-in.middleware';
import { RxHttp, http } from '@rxweb/http';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { login } from '@app/custom-models';


@anonymous()
@http({
    hostKey: 'server',
    path: 'api/Authentication',
})
@middleware([LoggedInMiddleware])

@Component({
    templateUrl: './clientlogin.component.html',
})
export class LoginComponent extends CoreComponent implements OnInit {
    loginFormGroup: IFormGroup<login>;
    logi: login;


    constructor(private formBuilder: RxFormBuilder, private http: RxHttp, private router: Router, private loginService: LoginService,
        private browserStorage: BrowserStorage) {
        super();
    }

    ngOnInit(): void {
        console.log("clientlogin");
        this.logi = new login();
        this.loginFormGroup = this.formBuilder.formGroup(this.logi) as IFormGroup<login>;
        var auth = this.browserStorage.local.get('auth', false);
        if (!auth) {
            this.router.navigate(["/clientlogin"]);
        }

    }


    loginUser() {
        // console.log(this.browserStorage.local.get('auth'));
        // this.http.post({ hostUri: 'https://localhost:44352', path: 'api/Authentication', body: { email: this.loginFormGroup.controls.email.value, password: this.loginFormGroup.controls.password.value } }).subscribe(t => {
        //     console.log(t);
        // })
        // debugger;
        this.loginService.login(this.loginFormGroup.value).subscribe((response) => {
            document.cookie = "requestContext='abc'";
            this.browserStorage.local.save('auth', response);
            // this.browserStorage.local.save('x-request', response.key);
            // this.browserStorage.local.save('userName', response.fullName);
            // this.browserStorage.local.save('userEmail', response.emailId);
            // this.browserStorage.local.save('lcode', response.languageCode);
            // this.browserStorage.local.save('userId', response.userId);
            this.router.navigate(["dashboard"]);
            location.reload();
        },
            // The 2nd callback handles errors.
            (err) => { alert("Invalid Email and Password!!!"); },
            // The 3rd callback handles the "complete" event.
            () => console.log("observable complete"))

    }
}
