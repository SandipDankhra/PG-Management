import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Bed } from '@app/models';
import { AbstractBed } from '../domain/abstract-bed';

@Component({
    selector: "app-bed-add",
    templateUrl: './bed-add.component.html'
})
export class BedAddComponent extends AbstractBed implements OnInit, OnDestroy {
    bed: Bed;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.bed = new Bed();
        this.bedFormGroup = this.formBuilder.formGroup(this.bed) as IFormGroup<Bed>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
