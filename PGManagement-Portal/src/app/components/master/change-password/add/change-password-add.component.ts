import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ChangePassword } from '@app/custom-models';
import { AbstractChangePassword } from '../domain/abstract-change-password';

@Component({
    selector: "app-change-password-add",
    templateUrl: './change-password-add.component.html'
})
export class ChangePasswordAddComponent extends AbstractChangePassword implements OnInit, OnDestroy {
    changePassword: ChangePassword;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.changePassword = new ChangePassword();
        this.changePasswordFormGroup = this.formBuilder.formGroup(this.changePassword) as IFormGroup<ChangePassword>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
