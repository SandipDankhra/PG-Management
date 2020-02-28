import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Flat } from '@app/models';
import { AbstractFlat } from '../domain/abstract-flat';

@Component({
    selector: "app-flat-add",
    templateUrl: './flat-add.component.html'
})
export class FlatAddComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: Flat;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.flat = new Flat();
        this.flatFormGroup = this.formBuilder.formGroup(this.flat) as IFormGroup<Flat>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
