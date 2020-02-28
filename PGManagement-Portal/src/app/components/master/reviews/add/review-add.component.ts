import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Review } from '@app/models';
import { AbstractReview } from '../domain/abstract-review';

@Component({
    selector: "app-review-add",
    templateUrl: './review-add.component.html'
})
export class ReviewAddComponent extends AbstractReview implements OnInit, OnDestroy {
    review: Review;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.review = new Review();
        this.reviewFormGroup = this.formBuilder.formGroup(this.review) as IFormGroup<Review>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
