import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './notice.routing'

import { NoticeListComponent } from './list/notice-list.component'
import { NoticeEditComponent } from './edit/notice-edit.component';
import { NoticeAddComponent } from './add/notice-add.component';
import { NoticeSharedModule } from './notice-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,NoticeSharedModule,
        ROUTING
    ],
    declarations: [NoticeListComponent,NoticeEditComponent,NoticeAddComponent],
    exports: [RouterModule],
    providers: []
})
export class NoticeModule { }


