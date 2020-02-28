import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractReview } from '../domain/abstract-review';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Review } from '@app/models';

@Component({
    selector: "app-review-edit",
    templateUrl: './review-edit.component.html'
})
export class ReviewEditComponent extends AbstractReview implements OnInit, OnDestroy {
    review: Review;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.reviewFormGroup = this.formBuilder.formGroup(Review,t) as IFormGroup<Review>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
