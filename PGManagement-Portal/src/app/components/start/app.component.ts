import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, HttpResponse, RxHttp, http } from '@rxweb/http';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { Router } from '@angular/router';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { ROUTES } from './routing';
import { AuthFilter, HttpResponseCode } from 'src/app/temp-service/AuthFilter';
import { ApplicationBroadcaster } from 'src/app/temp-service/application-broadcaster';

@http({ path: 'api/notices', hostKey: 'server', })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends RxHttp implements OnInit {

  route;
  isShowDashboard: boolean = false;
  isShowSidebar: boolean;
  userName: string = "Taher";
  notices: any;

  constructor(private browserStorage: BrowserStorage, private router: Router, private applicationBroadcaster: ApplicationBroadcaster, private http: RxHttp) { super() }

  ngOnInit(): void {

    this.isShowSidebar = this.browserStorage.local.get("showMenu");
    console.log("sidebar " + this.isShowSidebar);
    this.http.get('assets/sidebar.json').subscribe((response: any) => {

      this.route = response.links;
      console.log(this.route);
    })
    HttpClientConfig.register({
      hostURIs: [{
        name: 'server',
        default: false,
        uri: "https://localhost:44352"
      },
      {
        name: 'local',
        default: true,
        uri: "http://localhost:4200"// 'https://localhost:44376' 
      }],
      filters: [{ model: AuthFilter }],
      onError: (response: HttpResponse) => {
        if (response.statusCode == 401
        ) {
          this.browserStorage.local.clearAll();
          // this.baseToastr.error("Timeout")

          // this.router.navigate(["/login"]);
        }
        else if (response.statusCode == HttpResponseCode.InternalServerError) {
          // this.baseToastr.error("Error occur")
        }
        else if (response.statusCode == 403) {
          this.router.navigate(["/unauthorized"]);
        }
      }
    })
    console.log("before auth");
    var auth = this.browserStorage.local.get("auth");
    console.log("hey:" + auth);
    if (auth) {
      this.router.navigate(["/dashboard"])
      this.isShowDashboard = true;
    }
    else {
      this.browserStorage.local.clearAll();
      console.log("Login");
      // this.router.navigate(["/login"]);
      this.isShowDashboard = false;
    }

    ReactiveFormConfig.set({
      "validationMessage": {
        "required": "You can't leave this empty",
        "notEmpty": "You can't leave this empty",
        "minLength": "Minimum  characters required",
        "maxLength": "More than {{1}}  characters are not permitted",
        "pattern": "The specified input format is not recognized",
        "compare": "The specified values of {{0}} and {{1}} must be the same",
        "contains": "The specified value must ' in the input",
        "alpha": "You can use letters only",
        "alphaNumeric": "You can use letters, numbers and periods only",
        "range": "You need to enter appropriate value in this field",
        "maxNumber": "You can not enter value more than #n#",
        "numeric": "Only number required",

        "email": "Please enter valid email address",
        "latitude": "Please enter a valid latitude",
        "longitude": "Please enter a valid longitude",
        "url": "{{0}} Is not the correct url pattern.",
        //"range1to15":"Enter number between 1 to 15",
        "password": "Password length should be of 8 to 20 characters and should have atleast one uppercase, one lowercase letter, a number and a special character, without any whitespaces"
      }
    });
    this.get().subscribe(t => {
      this.notices = t;
    })
  }

  loginClicked(isClicked: boolean): void {
    if (isClicked) {
      this.isShowDashboard = true;
      this.router.navigate(["/users"])
      setTimeout(() => { this.isShowDashboard = true; }, 50)
    }
  }
  logout() {
    this.browserStorage.local.clearAll();
  }

}
