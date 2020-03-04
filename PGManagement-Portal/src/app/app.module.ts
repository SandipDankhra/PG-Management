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
const route = RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    route,
    RxWebModule,
    FormsModule, ReactiveFormsModule, RxReactiveFormsModule,
  ],
  providers: [RxHttp, BaseToastr, ModalView],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
