import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPayment } from '../domain/abstract-payment';
import { Payment } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-payment-list",
    templateUrl:'./payment-list.component.html'
})
export class PaymentListComponent extends AbstractPayment implements OnInit, OnDestroy {
    payment: List<Payment>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Payment>) => {
            this.payment = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
