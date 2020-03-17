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
    submit() {
        // let json = JSON.stringify([{ "RoleId": 1, "ApplicationModuleId": 1, "CanView": 1, "CanAdd": 1, "CanEdit": 1, "CanDelete": 1, "PermissionPriority": 1 }, { "RoleId": 1, "ApplicationModuleId": 1, "CanView": 0, "CanAdd": 0, "CanEdit": 1, "CanDelete": 1, "PermissionPriority": 1 }]);
        this.post({ body: { complaintName: this.complaintFormGroup.controls.complaintName.value, complaintDescription: this.complaintFormGroup.controls.complaintDescription.value } }).subscribe(t => {
            console.log(t);
        });

    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
