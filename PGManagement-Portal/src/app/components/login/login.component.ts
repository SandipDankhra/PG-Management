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
import { BaseToastr } from 'src/app/domain/customize-design/toastr';
import { Router } from '@angular/router';
// export class AuthFilter extends AbstractRequestFilter {
//     constructor(private browserStorage: BrowserStorage) { super() }
//     onRequest = (context: XhrContext) => {
//         context.request.headers.Authorization = this.browserStorage.local.get('Authorization');
//         this.onRequestExecuting(context);
//     }
// }
// @xhrFilter()

@middleware([LoggedInMiddleware])
@multilingual("loginComponent")
@anonymous()
@Component({
    templateUrl: './login.component.html',
})
@http({
    hostKey: "server",
    path: "api/Authentication",
})
export class LoginComponent extends CoreComponent implements OnInit {
    loginFormGroup: FormGroup;
    constructor(private browserStorage: BrowserStorage, private loginService: LoginService,private router:Router,
         private formBuilder: FormBuilder, private http: RxHttp) {
        super();
    }
    ngOnInit(): void {

        console.log("hello");
        // this.browserStorage.local.save('Authentication', '');
        this.loginFormGroup = this.formBuilder.group({
            email: [''],
            password: ['']
        })
        // this.http.get({ hostUri: 'https://localhost:44352', path: 'api/Authentication' }).subscribe(t => {
        //     // this.browserStorage.local.save('Authentication', t);
        //     document.cookie = "requestContext='abc'";
        //     this.browserStorage.local.save('auth', t);
        //     console.log(t);
        // })

    }
    login() {
        // console.log(this.browserStorage.local.get('auth'));
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
                this.browserStorage.local.save('auth', response);
                this.browserStorage.local.save('x-request', response.key);
                this.browserStorage.local.save('userName', response.fullName);
                this.browserStorage.local.save('userEmail', response.emailId);
                this.browserStorage.local.save('lcode', response.languageCode);
                this.browserStorage.local.save('userId', response.userId);
                console.log(response.validationMessage)
                this.router.navigate(["client-index"]);
            }
            // this.spin = false;
            // this.routers.navigate(["/users"]);
        })

    }


}
