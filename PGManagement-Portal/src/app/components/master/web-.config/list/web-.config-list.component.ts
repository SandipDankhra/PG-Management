import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { Abstractweb.config } from '../domain/abstract-web-.config';
import { web.config } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-web-.config-list",
    templateUrl:'./web-.config-list.component.html'
})
export class web.configListComponent extends Abstractweb.config implements OnInit, OnDestroy {
    web.config: List<web.config>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<web.config>) => {
            this.web.config = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
