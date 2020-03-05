import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractComplaint } from '../domain/abstract-complaint';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Complaint } from '@app/models';

@Component({
    selector: "app-complaint-edit",
    templateUrl: './complaint-edit.component.html'
})
export class ComplaintEditComponent extends AbstractComplaint implements OnInit, OnDestroy {
    complaint: Complaint;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.complaintFormGroup = this.formBuilder.formGroup(Complaint, t) as IFormGroup<Complaint>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
