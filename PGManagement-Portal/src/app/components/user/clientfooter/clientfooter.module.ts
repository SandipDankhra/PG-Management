import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { clientfooterComponent } from './clientfooter.component';
import { AppModule } from 'src/app/app.module';
import { routerModule } from '@rxweb/angular-router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RouterModule
    ],
    declarations: [clientfooterComponent],
    exports: [RouterModule,clientfooterComponent],
    providers: []
})
export class ClientFooterModule { }


