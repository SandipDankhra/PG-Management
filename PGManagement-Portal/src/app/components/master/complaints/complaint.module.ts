import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './complaint.routing'

import { ComplaintListComponent } from './list/complaint-list.component'
import { ComplaintEditComponent } from './edit/complaint-edit.component';
import { ComplaintAddComponent } from './add/complaint-add.component';
import { ComplaintSharedModule } from './complaint-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule, ComplaintSharedModule,
        ROUTING
    ],
    declarations: [ComplaintListComponent, ComplaintEditComponent, ComplaintAddComponent],
    exports: [RouterModule],
    bootstrap: [],
    providers: []
})
export class ComplaintModule { }


