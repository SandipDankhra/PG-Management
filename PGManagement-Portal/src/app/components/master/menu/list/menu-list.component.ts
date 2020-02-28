import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMenu } from '../domain/abstract-menu';
import { Menu } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-menu-list",
    templateUrl:'./menu-list.component.html'
})
export class MenuListComponent extends AbstractMenu implements OnInit, OnDestroy {
    menu: List<Menu>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Menu>) => {
            this.menu = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
