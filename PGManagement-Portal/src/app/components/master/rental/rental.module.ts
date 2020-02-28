import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './rental.routing'

import { RentalListComponent } from './list/rental-list.component'
import { RentalEditComponent } from './edit/rental-edit.component';
import { RentalAddComponent } from './add/rental-add.component';
import { RentalSharedModule } from './rental-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RentalSharedModule,
        ROUTING
    ],
    declarations: [RentalListComponent,RentalEditComponent,RentalAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RentalModule { }


