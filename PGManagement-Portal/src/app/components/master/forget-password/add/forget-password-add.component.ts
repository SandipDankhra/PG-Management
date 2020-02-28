import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ForgetPassword } from '@app/models';
import { AbstractForgetPassword } from '../domain/abstract-forget-password';

@Component({
    selector: "app-forget-password-add",
    templateUrl: './forget-password-add.component.html'
})
export class ForgetPasswordAddComponent extends AbstractForgetPassword implements OnInit, OnDestroy {
    forgetPassword: ForgetPassword;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.forgetPassword = new ForgetPassword();
        this.forgetPasswordFormGroup = this.formBuilder.formGroup(this.forgetPassword) as IFormGroup<ForgetPassword>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
