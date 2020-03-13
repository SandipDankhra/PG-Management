import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRental } from '../domain/abstract-rental';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';
import { vRentalRecord } from '@app/models';
import { Rental } from '@app/models';

@Component({
    selector: "app-rental-edit",
    templateUrl: './rental-edit.component.html'
})
export class RentalEditComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: Rental;
    subscription: Subscription;
    id: number;
    result: any;
    vrental: vRentalRecord;
    show: boolean = false;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe((t: vRentalRecord) => {
            console.log(t);
            this.vrental = t;
            this.show = true;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
