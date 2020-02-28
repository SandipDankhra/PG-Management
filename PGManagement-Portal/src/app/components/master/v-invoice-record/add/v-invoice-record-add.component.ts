import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vInvoiceRecord } from '@app/models';
import { AbstractvInvoiceRecord } from '../domain/abstract-v-invoice-record';

@Component({
    selector: "app-v-invoice-record-add",
    templateUrl: './v-invoice-record-add.component.html'
})
export class vInvoiceRecordAddComponent extends AbstractvInvoiceRecord implements OnInit, OnDestroy {
    vInvoiceRecord: vInvoiceRecord;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vInvoiceRecord = new vInvoiceRecord();
        this.vInvoiceRecordFormGroup = this.formBuilder.formGroup(this.vInvoiceRecord) as IFormGroup<vInvoiceRecord>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
