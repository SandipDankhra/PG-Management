import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './role-permission.routing'

import { RolePermissionListComponent } from './list/role-permission-list.component'
import { RolePermissionEditComponent } from './edit/role-permission-edit.component';
import { RolePermissionAddComponent } from './add/role-permission-add.component';
import { RolePermissionSharedModule } from './role-permission-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RolePermissionSharedModule,
        ROUTING
    ],
    declarations: [RolePermissionListComponent,RolePermissionEditComponent,RolePermissionAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RolePermissionModule { }


