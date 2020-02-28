import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRental } from '../domain/abstract-rental';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Rental } from '@app/models';

@Component({
    selector: "app-rental-edit",
    templateUrl: './rental-edit.component.html'
})
export class RentalEditComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: Rental;
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
            this.rentalFormGroup = this.formBuilder.formGroup(Rental,t) as IFormGroup<Rental>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
