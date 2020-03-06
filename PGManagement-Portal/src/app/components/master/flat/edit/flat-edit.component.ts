
import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFlat } from '../domain/abstract-flat';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Flat } from '@app/models';

@Component({
    selector: "app-flat-edit",
    templateUrl: './flat-edit.component.html'
})
export class FlatEditComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: Flat;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['flatId'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.flatFormGroup = this.formBuilder.formGroup(Flat,t) as IFormGroup<Flat>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
