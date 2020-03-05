import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRental } from '../domain/abstract-rental';
import { Rental } from "@app/models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';
import { AppGrid } from 'src/app/domain/app-grid';

@anonymous()
@Component({
    selector: "app-rental-list",
    templateUrl: './rental-list.component.html'
})
export class RentalListComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: Rental[];
    subscription: Subscription;
    userGrid: AppGrid;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: Rental[]) => {
            this.rental = t;
            // this.userGrid = new AppGrid(t, Rental, { actions: { onDelete: this.onDelete.bind(this), onEdit: this.onEdit.bind(this) } });
            // this.userGrid.design(document.getElementById("user-list"));
        })
    }

    onDelete() {

    }
    onEdit() {

    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
