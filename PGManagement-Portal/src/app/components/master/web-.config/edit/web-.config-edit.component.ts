import { Component, OnInit, OnDestroy } from "@angular/core"
import { Abstractweb.config } from '../domain/abstract-web-.config';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { web.config } from '@app/models';

@Component({
    selector: "app-web-.config-edit",
    templateUrl: './web-.config-edit.component.html'
})
export class web.configEditComponent extends Abstractweb.config implements OnInit, OnDestroy {
    web.config: web.config;
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
            this.web.configFormGroup = this.formBuilder.formGroup(web.config,t) as IFormGroup<web.config>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
