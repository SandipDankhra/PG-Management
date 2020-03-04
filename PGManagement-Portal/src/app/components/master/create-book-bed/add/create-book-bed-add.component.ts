import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { CreateBookBed } from '@app/custom-models';
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';

@Component({
    selector: "app-create-book-bed-add",
    templateUrl: './create-book-bed-add.component.html'
})
export class CreateBookBedAddComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: CreateBookBed;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.createBookBed = new CreateBookBed();
        this.createBookBedFormGroup = this.formBuilder.formGroup(this.createBookBed) as IFormGroup<CreateBookBed>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
