import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-available-bed.routing'

import { vAvailableBedListComponent } from './list/v-available-bed-list.component'
import { vAvailableBedEditComponent } from './edit/v-available-bed-edit.component';
import { vAvailableBedAddComponent } from './add/v-available-bed-add.component';
import { vAvailableBedSharedModule } from './v-available-bed-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vAvailableBedSharedModule,
        ROUTING
    ],
    declarations: [vAvailableBedListComponent,vAvailableBedEditComponent,vAvailableBedAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vAvailableBedModule { }


