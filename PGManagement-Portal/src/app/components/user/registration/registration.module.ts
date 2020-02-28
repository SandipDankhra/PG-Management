import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './registration.routing'

import { RegistrationListComponent } from './list/registration-list.component'
import { RegistrationEditComponent } from './edit/registration-edit.component';
import { RegistrationAddComponent } from './add/registration-add.component';
import { RegistrationSharedModule } from './registration-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RegistrationSharedModule,
        ROUTING
    ],
    declarations: [RegistrationListComponent,RegistrationEditComponent,RegistrationAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RegistrationModule { }


