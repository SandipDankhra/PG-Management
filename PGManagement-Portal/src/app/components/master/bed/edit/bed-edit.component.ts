import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBed } from '../domain/abstract-bed';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Bed } from '@app/models';

@Component({
    selector: "app-bed-edit",
    templateUrl: './bed-edit.component.html'
})
export class BedEditComponent extends AbstractBed implements OnInit, OnDestroy {
    bed: Bed;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
        })
        console.log(this.id);
        this.get({ params: [this.id] }).subscribe(t => {
            this.bedFormGroup = this.formBuilder.formGroup(Bed, t) as IFormGroup<Bed>;
            console.log(t);
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
