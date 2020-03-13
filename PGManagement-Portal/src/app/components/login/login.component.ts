import { Component, OnInit } from '@angular/core';
import { anonymous, middleware, route } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { CoreComponent } from '@rxweb/angular-router';
import { LoggedInMiddleware } from '../../domain/security/middleware/logged-in.middleware';
import { XhrContext, HttpResponse, ResponseFilter, AbstractRequestFilter, xhrFilter, http } from "@rxweb/http"
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxHttp } from "@rxweb/http";
import { LoginService } from './login.service';

import { Router } from '@angular/router';
import { ApplicationBroadcaster } from 'src/app/temp-service/application-broadcaster';
// export class AuthFilter extends AbstractRequestFilter {
//     constructor(private browserStorage: BrowserStorage) { super() }
//     onRequest = (context: XhrContext) => {
//         context.request.headers.Authorization = localStorage.getItem('Authorization');
//         this.onRequestExecuting(context);
//     }
// }
// @xhrFilter()
@anonymous()
@middleware([LoggedInMiddleware])
@multilingual("loginComponent")

@Component({
    templateUrl: './login.component.html',
})
@http({
    hostKey: "server",
    path: "api/Authentication",
})
export class LoginComponent extends CoreComponent implements OnInit {
    loginFormGroup: FormGroup;
    constructor(private browserStorage: BrowserStorage, private loginService: LoginService, private router: Router,
        private formBuilder: FormBuilder, private http: RxHttp, private applicationBroadcaster: ApplicationBroadcaster) {
        super();
    }
    ngOnInit(): void {
        console.log("hello");
        this.applicationBroadcaster.activeMenu(true);
        var auth = localStorage.getItem('auth');
        if (auth) {
            this.router.navigate(["/complaints"]);
        }



        // localStorage.setItem('Authentication', '');
        this.loginFormGroup = this.formBuilder.group({
            email: [''],
            password: ['']
        })
        // this.http.get({ hostUri: 'https://localhost:44352', path: 'api/Authentication' }).subscribe(t => {
        //     // localStorage.setItem('Authentication', t);
        //     document.cookie = "requestContext='abc'";
        //     localStorage.setItem('auth', t);
        //     console.log(t);
        // })

    }
    login() {
        // console.log(localStorage.getItem('auth'));
        // this.http.post({ hostUri: 'https://localhost:44352', path: 'api/Authentication', body: { email: this.loginFormGroup.controls.email.value, password: this.loginFormGroup.controls.password.value } }).subscribe(t => {
        //     console.log(t);
        // })
        this.loginService.login(this.loginFormGroup.value).subscribe(response => {
            console.log(this.loginFormGroup.value);
            if (response.failedLogin) {

            }
            else {
                // this.showComponent = false;
                document.cookie = "requestContext='abc'";
                localStorage.setItem('auth', response);

                this.router.navigate(["complaints"]);
            }
            // this.spin = false;
            // this.routers.navigate(["/users"]);
        })

    }


}
