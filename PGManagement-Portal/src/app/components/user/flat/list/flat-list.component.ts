import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFlat } from '../domain/abstract-flat';
import { Flat } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-flat-list",
    templateUrl:'./flat-list.component.html'
})
export class FlatListComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: List<Flat>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Flat>) => {
            this.flat = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
