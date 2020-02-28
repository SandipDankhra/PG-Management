import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './requester.routing'

import { RequesterListComponent } from './list/requester-list.component'
import { RequesterEditComponent } from './edit/requester-edit.component';
import { RequesterAddComponent } from './add/requester-add.component';
import { RequesterSharedModule } from './requester-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RequesterSharedModule,
        ROUTING
    ],
    declarations: [RequesterListComponent,RequesterEditComponent,RequesterAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RequesterModule { }


