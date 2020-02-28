import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPayment } from '../domain/abstract-payment';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Payment } from '@app/models';

@Component({
    selector: "app-payment-edit",
    templateUrl: './payment-edit.component.html'
})
export class PaymentEditComponent extends AbstractPayment implements OnInit, OnDestroy {
    payment: Payment;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.paymentFormGroup = this.formBuilder.formGroup(Payment,t) as IFormGroup<Payment>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
