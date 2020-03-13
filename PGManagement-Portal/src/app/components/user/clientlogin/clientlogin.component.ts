import { Component, OnInit } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { UserAuthentication } from '../../../models/custom-models/user.model';
import { CoreComponent } from '@rxweb/angular-router';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { LoggedInMiddleware } from '../../../domain/security/middleware/logged-in.middleware';
import { RxHttp, http } from '@rxweb/http';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    loginFormGroup: FormGroup

    constructor(private formBuilder: FormBuilder, private http: RxHttp, private router: Router, private loginService: LoginService,
        private browserStorage: BrowserStorage) {
        super();
    }

    ngOnInit(): void {
        var auth = localStorage.getItem('auth');
        if (!auth) {

            this.router.navigate(["/clientlogin"]);
        }
        this.loginFormGroup = this.formBuilder.group({
            email: [''],
            password: ['']
        })
    }


    loginUser() {
        // console.log(localStorage.getItem('auth'));
        // this.http.post({ hostUri: 'https://localhost:44352', path: 'api/Authentication', body: { email: this.loginFormGroup.controls.email.value, password: this.loginFormGroup.controls.password.value } }).subscribe(t => {
        //     console.log(t);
        // })
        this.loginService.login(this.loginFormGroup.value).subscribe(response => {
            // debugger
            if (response.failedLogin) {
            }
            else {
                // this.showComponent = false;
                document.cookie = "requestContext='abc'";
                localStorage.setItem('auth', response);
                localStorage.setItem('x-request', response.key);
                localStorage.setItem('userName', response.fullName);
                localStorage.setItem('userEmail', response.emailId);
                localStorage.setItem('lcode', response.languageCode);
                localStorage.setItem('userId', response.userId);
                console.log(response.validationMessage)
            }
            // this.spin = false;
            // this.routers.navigate(["/users"]);
        })
        this.router.navigate(["/client-index"]);
    }
}
