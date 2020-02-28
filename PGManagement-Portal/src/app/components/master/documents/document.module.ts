import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './document.routing'

import { DocumentListComponent } from './list/document-list.component'
import { DocumentEditComponent } from './edit/document-edit.component';
import { DocumentAddComponent } from './add/document-add.component';
import { DocumentSharedModule } from './document-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,DocumentSharedModule,
        ROUTING
    ],
    declarations: [DocumentListComponent,DocumentEditComponent,DocumentAddComponent],
    exports: [RouterModule],
    providers: []
})
export class DocumentModule { }


