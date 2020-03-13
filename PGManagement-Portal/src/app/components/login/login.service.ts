import { Injectable } from '@angular/core';
import { RxHttp } from '@rxweb/http';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
// import { ForgotPasswordViewModel } from 'src/app/view-model/forgot-password-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: RxHttp, private browserStorage: BrowserStorage) {
    //this.http.badRequest = (data) => {
    //    debugger
    //}
  }


  login(userCredentialModel: any) {
    this.browserStorage.local.save("showMenu", true);
    return this.http.post<any>({ body: userCredentialModel, path: "api/Authentication", hostUri: 'https://localhost:44352' })
  }
  // forgotPassword(forgotPasswordModel: any) {
  //   return this.http.post<any>({ body: forgotPasswordModel, path: "api/Authentication/forgotPassword" });
  // }

  // memberFeedback(memberFeedback: any) {
  //   return this.http.post<any>({ body: memberFeedback, path: "api/Authentication/memberfeedback" });
  // }
}
