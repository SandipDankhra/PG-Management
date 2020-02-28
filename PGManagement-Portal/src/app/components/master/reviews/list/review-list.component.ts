import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractReview } from '../domain/abstract-review';
import { Review } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-review-list",
    templateUrl:'./review-list.component.html'
})
export class ReviewListComponent extends AbstractReview implements OnInit, OnDestroy {
    reviews: List<Review>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Review>) => {
            this.reviews = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
