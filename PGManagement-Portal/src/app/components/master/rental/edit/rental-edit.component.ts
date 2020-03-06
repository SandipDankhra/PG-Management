import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRental } from '../domain/abstract-rental';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';
import { vRentalRecord} from '@app/models';
import { Rental } from '@app/models';

@Component({
    selector: "app-rental-edit",
    templateUrl: './rental-edit.component.html'
})
export class RentalEditComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: Rental;
    subscription: Subscription;
    id: number;
    result:any;
    vrental:vRentalRecord;

    // constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
    //     super();
    //     this.activatedRoute.queryParams.subscribe(t => {
    //         this.id = t['id'];
    //     })
    // }

    ngOnInit(): void {
        // this.get({ params: [this.id] }).subscribe(t => {
        //     this.result=t;
             this.subscription = this.get().subscribe((t) => {
         
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
