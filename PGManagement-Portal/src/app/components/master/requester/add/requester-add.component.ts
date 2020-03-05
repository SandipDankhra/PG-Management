import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Requester } from '@app/models';
import { AbstractRequester } from '../domain/abstract-requester';
import { Router } from '@angular/router';

@Component({
    selector: "app-requester-add",
    templateUrl: './requester-add.component.html'
})
export class RequesterAddComponent extends AbstractRequester implements OnInit, OnDestroy {
    requester: Requester;
    subscription: Subscription;
    result: any;

    constructor(private formBuilder: RxFormBuilder,private router:Router) {
        super();
    }

    ngOnInit(): void {
        this.requester = new Requester();
        this.requesterFormGroup = this.formBuilder.formGroup(this.requester) as IFormGroup<Requester>;

      
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
