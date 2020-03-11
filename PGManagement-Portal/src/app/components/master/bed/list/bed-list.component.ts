import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBed } from '../domain/abstract-bed';
import { Bed } from "@app/models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';

@Component({
    selector: "app-bed-list",
    templateUrl: './bed-list.component.html'
})
export class BedListComponent extends AbstractBed implements OnInit, OnDestroy {
    bed: List<Bed>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Bed>) => {
            this.bed = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
