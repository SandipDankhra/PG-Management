import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-invoice-record.routing'

import { vInvoiceRecordListComponent } from './list/v-invoice-record-list.component'
import { vInvoiceRecordEditComponent } from './edit/v-invoice-record-edit.component';
import { vInvoiceRecordAddComponent } from './add/v-invoice-record-add.component';
import { vInvoiceRecordSharedModule } from './v-invoice-record-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vInvoiceRecordSharedModule,
        ROUTING
    ],
    declarations: [vInvoiceRecordListComponent,vInvoiceRecordEditComponent,vInvoiceRecordAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vInvoiceRecordModule { }


