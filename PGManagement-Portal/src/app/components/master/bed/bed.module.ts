import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './bed.routing'

import { BedListComponent } from './list/bed-list.component'
import { BedEditComponent } from './edit/bed-edit.component';
import { BedAddComponent } from './add/bed-add.component';
import { BedSharedModule } from './bed-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BedSharedModule,
        ROUTING
    ],
    declarations: [BedListComponent,BedEditComponent,BedAddComponent],
    exports: [RouterModule],
    providers: []
})
export class BedModule { }


