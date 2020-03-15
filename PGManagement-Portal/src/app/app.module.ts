import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { RestrictInputDirective } from 'src/app/domain/custom-directives/restrict-input';

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
import { ApplicationBroadcaster } from './temp-service/application-broadcaster';
import { CommonModule } from '@angular/common';
import { ClientHeaderModule } from './components/user/clientheader/clientheader.module';
import { ClientFooterModule } from './components/user/clientfooter/clientfooter.module';
import { DashboardComponent } from './components/master/dashboard/dashboard.component'
const route = RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' });

@NgModule({
  declarations: [
    AppComponent,
    ClientIndexComponent,
    RegistrationAddComponent,RestrictInputDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    route,
    RxWebModule,
    ClientFooterModule,
    ClientHeaderModule,
    FormsModule, ReactiveFormsModule, RxReactiveFormsModule, BrowserAnimationsModule, ToastrModule.forRoot({
      positionClass: 'toast-top-center', timeOut: 2000
    })
  ],
  providers: [RxHttp, BaseToastr, ModalView, LoginService, ApplicationBroadcaster],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule {
 
}
