import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvInvoiceRecord } from '../domain/abstract-v-invoice-record';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vInvoiceRecord } from '@app/models';

@Component({
    selector: "app-v-invoice-record-edit",
    templateUrl: './v-invoice-record-edit.component.html'
})
export class vInvoiceRecordEditComponent extends AbstractvInvoiceRecord implements OnInit, OnDestroy {
    vInvoiceRecord: vInvoiceRecord;
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
            this.vInvoiceRecordFormGroup = this.formBuilder.formGroup(vInvoiceRecord,t) as IFormGroup<vInvoiceRecord>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
