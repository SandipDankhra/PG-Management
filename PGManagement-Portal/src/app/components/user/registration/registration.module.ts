import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './registration.routing'


import { RegistrationEditComponent } from './edit/registration-edit.component';
import { RegistrationAddComponent } from './add/registration-add.component';
import { RegistrationSharedModule } from './registration-shared.module';
import { ClientHeaderModule } from '../clientheader/clientheader.module';
import { ClientFooterModule } from '../clientfooter/clientfooter.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RegistrationSharedModule,ClientHeaderModule,ClientFooterModule,
        ROUTING
    ],
    declarations: [RegistrationEditComponent,RegistrationAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RegistrationModule { }


