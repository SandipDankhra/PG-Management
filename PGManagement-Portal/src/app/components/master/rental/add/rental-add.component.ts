import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Rental } from '@app/models';
import { AbstractRental } from '../domain/abstract-rental';

@Component({
    selector: "app-rental-add",
    templateUrl: './rental-add.component.html'
})
export class RentalAddComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: Rental;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.rental = new Rental();
       
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
