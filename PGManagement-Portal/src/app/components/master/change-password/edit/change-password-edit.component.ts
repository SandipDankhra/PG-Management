import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractChangePassword } from '../domain/abstract-change-password';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { ChangePassword } from '@app/custom-models';

@Component({
    selector: "app-change-password-edit",
    templateUrl: './change-password-edit.component.html'
})
export class ChangePasswordEditComponent extends AbstractChangePassword implements OnInit, OnDestroy {
    changePassword: ChangePassword;
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
            this.changePasswordFormGroup = this.formBuilder.formGroup(ChangePassword,t) as IFormGroup<ChangePassword>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
