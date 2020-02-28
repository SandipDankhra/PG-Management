import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractComplaint } from '../domain/abstract-complaint';
import { Complaint } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-complaint-list",
    templateUrl:'./complaint-list.component.html'
})
export class ComplaintListComponent extends AbstractComplaint implements OnInit, OnDestroy {
    complaints: List<Complaint>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Complaint>) => {
            this.complaints = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
