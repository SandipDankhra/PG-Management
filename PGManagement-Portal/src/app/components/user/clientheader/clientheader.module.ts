import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { clientheaderComponent } from './clientheader.component';
import { AppModule } from 'src/app/app.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RouterModule
    ],
    declarations: [clientheaderComponent],
    exports: [RouterModule,clientheaderComponent],
    providers: []
})
export class ClientHeaderModule { }


