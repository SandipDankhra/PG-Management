import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Registration } from '@app/models';
import { AbstractRegistration } from '../domain/abstract-registration';

@Component({
    selector: "app-registration-add",
    templateUrl: './registration-add.component.html'
})
export class RegistrationAddComponent extends AbstractRegistration implements OnInit, OnDestroy {
    registration: Registration;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.registration = new Registration();
        this.registrationFormGroup = this.formBuilder.formGroup(this.registration) as IFormGroup<Registration>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
