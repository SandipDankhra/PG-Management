import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractNotice } from '../domain/abstract-notice';
import { Notice, vNotice } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector: "app-notice-list",
    templateUrl: './notice-list.component.html'
})
export class NoticeListComponent extends AbstractNotice implements OnInit, OnDestroy {
    notices: List<vNotice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vNotice>) => {
            this.notices = t;
        })
    }

    onDelete(id: number) {
        this.delete({ params: [id], queryParams: { NoticeId: id }, body: {} }).subscribe(t => {
            console.log(t);
            location.reload();
        })
    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
