import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Complaint } from '@app/models';
import { AbstractComplaint } from '../domain/abstract-complaint';

@Component({
    selector: "app-complaint-add",
    templateUrl: './complaint-add.component.html'
})
export class ComplaintAddComponent extends AbstractComplaint implements OnInit, OnDestroy {
    complaint: Complaint;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.complaint = new Complaint();
        this.complaintFormGroup = this.formBuilder.formGroup(this.complaint) as IFormGroup<Complaint>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
