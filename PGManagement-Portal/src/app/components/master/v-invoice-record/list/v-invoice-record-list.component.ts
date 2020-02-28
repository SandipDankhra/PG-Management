import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvInvoiceRecord } from '../domain/abstract-v-invoice-record';
import { vInvoiceRecord } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-invoice-record-list",
    templateUrl:'./v-invoice-record-list.component.html'
})
export class vInvoiceRecordListComponent extends AbstractvInvoiceRecord implements OnInit, OnDestroy {
    vInvoiceRecord: List<vInvoiceRecord>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vInvoiceRecord>) => {
            this.vInvoiceRecord = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
