import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './forget-password.routing'

import { ForgetPasswordListComponent } from './list/forget-password-list.component'
import { ForgetPasswordEditComponent } from './edit/forget-password-edit.component';
import { ForgetPasswordAddComponent } from './add/forget-password-add.component';
import { ForgetPasswordSharedModule } from './forget-password-shared.module';
import { ClientHeaderModule } from '../../user/clientheader/clientheader.module';
import { ClientFooterModule } from '../../user/clientfooter/clientfooter.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ForgetPasswordSharedModule,ClientHeaderModule,ClientFooterModule,
        ROUTING
    ],
    declarations: [ForgetPasswordListComponent,ForgetPasswordEditComponent,ForgetPasswordAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ForgetPasswordModule { }


