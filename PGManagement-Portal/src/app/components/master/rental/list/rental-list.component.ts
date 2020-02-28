import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRental } from '../domain/abstract-rental';
import { Rental } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-rental-list",
    templateUrl:'./rental-list.component.html'
})
export class RentalListComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: List<Rental>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Rental>) => {
            this.rental = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
