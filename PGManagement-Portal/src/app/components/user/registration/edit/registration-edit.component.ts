import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRegistration } from '../domain/abstract-registration';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/models';

@Component({
    selector: "app-registration-edit",
    templateUrl: './registration-edit.component.html'
})
export class RegistrationEditComponent extends AbstractRegistration implements OnInit, OnDestroy {
    registration: User;
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
            this.registrationFormGroup = this.formBuilder.formGroup(UserBase,t) as IFormGroup<UserBase>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
