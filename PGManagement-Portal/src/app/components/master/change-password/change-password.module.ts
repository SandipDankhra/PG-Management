import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './change-password.routing'

import { ChangePasswordListComponent } from './list/change-password-list.component'
import { ChangePasswordEditComponent } from './edit/change-password-edit.component';
import { ChangePasswordAddComponent } from './add/change-password-add.component';
import { ChangePasswordSharedModule } from './change-password-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ChangePasswordSharedModule,
        ROUTING
    ],
    declarations: [ChangePasswordListComponent,ChangePasswordEditComponent,ChangePasswordAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ChangePasswordModule { }


