import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ROUTES } from './components/start/routing';
import { AppComponent } from './components/start/app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { RxHttp } from '@rxweb/http';
import { BaseToastr } from './domain/customize-design/toastr';
import { ModalView } from './domain/customize-design/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxWebModule } from './rxweb.module'
import { ClientIndexComponent } from './components/user/client-index.componet';
import { RegistrationAddComponent } from './components/user/registration/add/registration-add.component';
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
    FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RouterModule,BrowserAnimationsModule,ToastrModule.forRoot({
      positionClass: 'toast-top-center',timeOut: 2000
    })
  ],
  providers: [RxHttp, BaseToastr, ModalView],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
