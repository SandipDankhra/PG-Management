import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { RentalTypeEnum, PaymentTypeEnum } from '@app/enums';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { CreateBookBed } from '@app/custom-models';
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';

import { User } from '@app/models';
import { List } from '@rxweb/generics';
import { anonymous } from '@rxweb/angular-router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: "app-create-book-bed-add",
    templateUrl: './create-book-bed-add.component.html'
})
export class CreateBookBedAddComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: CreateBookBed;
    subscription: Subscription;
    users: List<User>;
    rentalTypeEnum: any;
    paymentTypeEnum: any;
    keys: any;
    result: any;
    key: any;
    id: number;
    createBookBedFormgroup: FormGroup;
    // keyspay:any;

    constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })

    }

    ngOnInit(): void {
        this.rentalTypeEnum = RentalTypeEnum;
        this.paymentTypeEnum = PaymentTypeEnum;
        this.createBookBed = new CreateBookBed();
        this.keys = Object.keys(this.rentalTypeEnum).filter(Number);
        this.key = Object.keys(this.paymentTypeEnum).filter(Number);
        this.get({ path: 'api/Registration' }).subscribe((t: List<User>) => {
            this.users = t;
        })
        this.createBookBed.bedId = this.id;
        this.createBookBedFormgroup = this.formBuilder.group({
            'userId': [''],
            'bedId': [''],
            'rentalCity': [''],
            'rentalType': [''],
            'paymentTypeId': [''],
            'paymentAmount': [''],
            'startDate': [''],
            'endDate': ['']

        });
        this.createBookBedFormgroup.controls.bedId.patchValue(1);
    }

    // paymentEnum(){
    //     this.keys=Object.keys(this.paymentTypeEnum).filter(Number);
    // }

    submit() {

    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    onAddCreateBookBed() {
        this.post({
            body: {
                BedId: this.createBookBedFormgroup.controls.bedId.value,
                userId: this.createBookBedFormgroup.controls.userId.value,
                rentalCity: this.createBookBedFormgroup.controls.rentalCity.value,
                rentalType: this.createBookBedFormgroup.controls.rentalType.value,
                paymentTypeId: this.createBookBedFormgroup.controls.paymentTypeId.value,
                paymentAmount: this.createBookBedFormgroup.controls.paymentAmount.value,
                startDate: this.createBookBedFormgroup.controls.startDate.value,
                endDate: this.createBookBedFormgroup.controls.endDate.value
                // this.createBookBed
            }

        }).subscribe(t => {
            this.result = t;
        })
    }

}
