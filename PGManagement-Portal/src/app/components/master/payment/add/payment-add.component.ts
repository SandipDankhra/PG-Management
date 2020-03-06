import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Payment } from '@app/models';
import { AbstractPayment } from '../domain/abstract-payment';


@Component({
    selector: "app-payment-add",
    templateUrl: './payment-add.component.html'
})
export class PaymentAddComponent extends AbstractPayment implements OnInit, OnDestroy {
    payment: Payment;
    
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
       
        this.payment = new Payment();
        this.paymentFormGroup = this.formBuilder.formGroup(this.payment) as IFormGroup<Payment>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
