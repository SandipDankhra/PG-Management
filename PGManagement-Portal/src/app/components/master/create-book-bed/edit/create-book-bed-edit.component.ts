import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { CreateBookBed } from '@app/custom-models';

@Component({
    selector: "app-create-book-bed-edit",
    templateUrl: './create-book-bed-edit.component.html'
})
export class CreateBookBedEditComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: CreateBookBed;
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
            this.createBookBedFormGroup = this.formBuilder.formGroup(CreateBookBed,t) as IFormGroup<CreateBookBed>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
