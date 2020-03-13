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
    invoice:any;
    isShow:boolean=false;
    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
            // console.log(t);
        })
    }

    ngOnInit(): void {
        console.log(this.id);
        this.get({ params: [this.id] }).subscribe((t:vInvoiceRecord) => {
            debugger;
            // this.vInvoiceRecordFormGroup = this.formBuilder.formGroup(vInvoiceRecord,t) as IFormGroup<vInvoiceRecord>;
            console.log(t);
                     
            
           
            // let newd = t.createDate.toString();    
            // var newdate = newd.split(' '); 
            // var newdate 
            // // this.vInvoiceRecord.createDate = newdate[0]+newdate[1] + newdate[2];
            // let invoiceDate=newdate[0]+newdate[1] + newdate[2];
            this.vInvoiceRecord=t;
            this.isShow=true;

        })
    }
    

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
