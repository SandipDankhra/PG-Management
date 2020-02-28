import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractForgetPassword } from '../domain/abstract-forget-password';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { ForgetPassword } from '@app/models';

@Component({
    selector: "app-forget-password-edit",
    templateUrl: './forget-password-edit.component.html'
})
export class ForgetPasswordEditComponent extends AbstractForgetPassword implements OnInit, OnDestroy {
    forgetPassword: ForgetPassword;
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
            this.forgetPasswordFormGroup = this.formBuilder.formGroup(ForgetPassword,t) as IFormGroup<ForgetPassword>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
