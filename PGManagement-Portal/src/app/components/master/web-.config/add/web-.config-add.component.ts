import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { web.config } from '@app/models';
import { Abstractweb.config } from '../domain/abstract-web-.config';

@Component({
    selector: "app-web-.config-add",
    templateUrl: './web-.config-add.component.html'
})
export class web.configAddComponent extends Abstractweb.config implements OnInit, OnDestroy {
    web.config: web.config;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.web.config = new web.config();
        this.web.configFormGroup = this.formBuilder.formGroup(this.web.config) as IFormGroup<web.config>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
