import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRequester } from '../domain/abstract-requester';
import { Requester } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-requester-list",
    templateUrl:'./requester-list.component.html'
})
export class RequesterListComponent extends AbstractRequester implements OnInit, OnDestroy {
    requester: List<Requester>;
    subscription: Subscription;
    result:any;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Requester>) => {
            this.requester = t;
        })
    }
    confirmRequest(){

    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
