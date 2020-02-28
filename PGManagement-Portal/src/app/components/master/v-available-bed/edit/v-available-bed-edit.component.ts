import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvAvailableBed } from '../domain/abstract-v-available-bed';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vAvailableBed } from '@app/models';

@Component({
    selector: "app-v-available-bed-edit",
    templateUrl: './v-available-bed-edit.component.html'
})
export class vAvailableBedEditComponent extends AbstractvAvailableBed implements OnInit, OnDestroy {
    vAvailableBed: vAvailableBed;
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
            this.vAvailableBedFormGroup = this.formBuilder.formGroup(vAvailableBed,t) as IFormGroup<vAvailableBed>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
