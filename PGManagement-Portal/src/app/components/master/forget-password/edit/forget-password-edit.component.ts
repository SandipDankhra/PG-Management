import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractForgetPassword } from '../domain/abstract-forget-password';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { User, Authentication } from '@app/models';

@Component({
    selector: "app-forget-password-edit",
    templateUrl: './forget-password-edit.component.html'
})
export class ForgetPasswordEditComponent extends AbstractForgetPassword implements OnInit, OnDestroy {
    authentication: Authentication;
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
            this.forgetPasswordFormGroup = this.formBuilder.formGroup(Authentication, t) as IFormGroup<Authentication>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
