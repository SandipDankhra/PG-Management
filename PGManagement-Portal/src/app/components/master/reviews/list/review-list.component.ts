import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractReview } from '../domain/abstract-review';
import { Review, ReviewLookup } from "@app/models";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "app-review-list",
    templateUrl: './review-list.component.html'
})
export class ReviewListComponent extends AbstractReview implements OnInit, OnDestroy {
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
    onDelete(rId: number) {
        this.reviewId = rId;
    }

    onConfirmDelete() {
        this.delete({ params: [this.reviewId], body: { reviewId: this.reviewId } }).subscribe(res => {
            this.result = res;
            this.showSuccessDelete();
        })

    }

    showSuccessDelete() {
        this.toastr.info('Review Deleted Successfully !!!');
        location.reload();
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
