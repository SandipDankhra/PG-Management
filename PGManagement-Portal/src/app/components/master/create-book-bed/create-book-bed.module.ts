import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './create-book-bed.routing'

import { CreateBookBedListComponent } from './list/create-book-bed-list.component'
import { CreateBookBedEditComponent } from './edit/create-book-bed-edit.component';
import { CreateBookBedAddComponent } from './add/create-book-bed-add.component';
import { CreateBookBedSharedModule } from './create-book-bed-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CreateBookBedSharedModule,
        ROUTING
    ],
    declarations: [CreateBookBedListComponent,CreateBookBedEditComponent,CreateBookBedAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CreateBookBedModule { }


