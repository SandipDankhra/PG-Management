import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './payment.routing'

import { PaymentListComponent } from './list/payment-list.component'
import { PaymentEditComponent } from './edit/payment-edit.component';
import { PaymentAddComponent } from './add/payment-add.component';
import { PaymentSharedModule } from './payment-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PaymentSharedModule,
        ROUTING
    ],
    declarations: [PaymentListComponent,PaymentEditComponent,PaymentAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PaymentModule { }


