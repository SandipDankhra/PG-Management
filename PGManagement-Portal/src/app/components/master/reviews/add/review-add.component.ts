import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { Review } from '@app/models';
import { AbstractReview } from '../domain/abstract-review';
import { anonymous, routerModule } from '@rxweb/angular-router';
import { Router } from '@angular/router';


@Component({
    selector: "app-review-add",
    templateUrl: './review-add.component.html',
    styleUrls: ['../review.css']

})
export class ReviewAddComponent extends AbstractReview implements OnInit, OnDestroy {
    review: Review;
    subscription: Subscription;
    result: any;

    constructor(private formBuilder: RxFormBuilder, private toastr: ToastrService, private router: Router) {
        super();
    }

    ngOnInit(): void {
        this.review = new Review();
        this.reviewFormGroup = this.formBuilder.formGroup(this.review) as IFormGroup<Review>;
    }

    showSuccess() {
        this.toastr.success('Thank you feedback !!!!');
    }
    sendReview() {
        this.review.rentalId=1;
        this.post({ body: this.review }).subscribe(t => {
            this.result = t;
        })
        this.reviewFormGroup.reset();
        this.showSuccess();
        this.router.navigate(['client-index']);
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
