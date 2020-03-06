import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vInvoiceRecord } from '@app/models';
import { AbstractvInvoiceRecord } from '../domain/abstract-v-invoice-record';
import {BookBed} from '@app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-v-invoice-record-add",
    templateUrl: './v-invoice-record-add.component.html'
})
export class vInvoiceRecordAddComponent extends AbstractvInvoiceRecord implements OnInit, OnDestroy {
    vInvoiceRecord: vInvoiceRecord;
    subscription: Subscription;
    invoice:any;
    bookBed:BookBed;
    id:number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {

        this.get({params:[this.id]}).subscribe(res=>
            {
                this.invoice=res;
            })


        // this.vInvoiceRecord = new vInvoiceRecord();
        // this.vInvoiceRecordFormGroup = this.formBuilder.formGroup(this.vInvoiceRecord) as IFormGroup<vInvoiceRecord>;

    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
