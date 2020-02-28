import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRequester } from '../domain/abstract-requester';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Requester } from '@app/models';

@Component({
    selector: "app-requester-edit",
    templateUrl: './requester-edit.component.html'
})
export class RequesterEditComponent extends AbstractRequester implements OnInit, OnDestroy {
    requester: Requester;
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
            this.requesterFormGroup = this.formBuilder.formGroup(Requester,t) as IFormGroup<Requester>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
