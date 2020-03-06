import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { ROUTES } from './components/start/routing';
import { AppComponent } from './components/start/app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { RxHttp } from '@rxweb/http';
import { BaseToastr } from './domain/customize-design/toastr';
import { ModalView } from './domain/customize-design/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxWebModule } from './rxweb.module'
import { LoginService } from './components/login/login.service';
import { RegistrationAddComponent } from './components/user/registration/add/registration-add.component';
import { ClientIndexComponent } from './components/user/client-index.componet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
const route = RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' });

@NgModule({
  declarations: [
    AppComponent,
    ClientIndexComponent,
    RegistrationAddComponent
  ],
  imports: [
    BrowserModule,
    route,
    RxWebModule,
    FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BrowserAnimationsModule,ToastrModule.forRoot({
      positionClass: 'toast-top-center',timeOut: 2000
    })
  ],
  providers: [RxHttp, BaseToastr, ModalView, LoginService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
