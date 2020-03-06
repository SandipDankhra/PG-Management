import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMenu } from '../domain/abstract-menu';
import { Menu } from "@app/models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';


@Component({
    selector: "app-menu-list",
    templateUrl: './menu-list.component.html'
})
export class MenuListComponent extends AbstractMenu implements OnInit, OnDestroy {
    menus: List<Menu>;
    subscription: Subscription;
    result: any;

    ngOnInit(): void {
        this.Get()
    }

    Get() {
        this.subscription = this.get().subscribe((t: List<Menu>) => {
            this.menus = t;
        })
    }

    editMenu() {

    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
