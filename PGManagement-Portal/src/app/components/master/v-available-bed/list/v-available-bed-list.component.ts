import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvAvailableBed } from '../domain/abstract-v-available-bed';
import { vAvailableBed } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-available-bed-list",
    templateUrl:'./v-available-bed-list.component.html'
})
export class vAvailableBedListComponent extends AbstractvAvailableBed implements OnInit, OnDestroy {
    vAvailableBed: List<vAvailableBed>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vAvailableBed>) => {
            this.vAvailableBed = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
