import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractReview } from '../domain/abstract-review';
import { Review, ReviewLookup } from "@app/models";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "app-review-list",
    templateUrl: './client-review-list.component.html',
    styleUrls: ['../../review.css'],
})
export class clientReviewListComponent extends AbstractReview implements OnInit, OnDestroy {
    reviews: List<ReviewLookup>;
    subscription: Subscription;
    reviewId: number;
    result: any;
    isShow: boolean = false;

    constructor(private toastr: ToastrService) {
        super()
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<ReviewLookup>) => {
            console.log(t);
            this.reviews = t;

        })
    }
   
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
