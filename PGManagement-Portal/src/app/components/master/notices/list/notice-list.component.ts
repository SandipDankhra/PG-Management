import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractNotice } from '../domain/abstract-notice';
import { Notice } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-notice-list",
    templateUrl:'./notice-list.component.html'
})
export class NoticeListComponent extends AbstractNotice implements OnInit, OnDestroy {
    notices: List<Notice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Notice>) => {
            this.notices = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
