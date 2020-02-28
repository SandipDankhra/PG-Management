import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vAvailableBed } from '@app/models';
import { AbstractvAvailableBed } from '../domain/abstract-v-available-bed';

@Component({
    selector: "app-v-available-bed-add",
    templateUrl: './v-available-bed-add.component.html'
})
export class vAvailableBedAddComponent extends AbstractvAvailableBed implements OnInit, OnDestroy {
    vAvailableBed: vAvailableBed;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vAvailableBed = new vAvailableBed();
        this.vAvailableBedFormGroup = this.formBuilder.formGroup(this.vAvailableBed) as IFormGroup<vAvailableBed>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
