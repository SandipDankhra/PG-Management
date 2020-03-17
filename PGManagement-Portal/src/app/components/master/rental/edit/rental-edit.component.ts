import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRental } from '../domain/abstract-rental';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';
import { vRentalRecord, vBookBed } from '@app/models';
import { Rental } from '@app/models';
import { CreateBookBed } from '@app/custom-models';
import { List } from '@rxweb/generics';
import { RentalTypeEnum } from 'src/app/enums/rental-type.enum';
import { PaymentTypeEnum } from 'src/app/enums/payment-type.enum';

@Component({
    selector: "app-rental-edit",
    templateUrl: './rental-edit.component.html'
})
export class RentalEditComponent extends AbstractRental implements OnInit, OnDestroy {
    rental: Rental;
    rentalBookBeds:List<vBookBed>;
    subscription: Subscription;
    id: number;
    result: any;
    rentalRecord:vRentalRecord;
    vrental: vRentalRecord;
    show: boolean = false;
    isLoad:boolean=false;
    rentalTypeEnum: any;
    paymentTypeEnum: any;
    rentalkey: any;
    paymentkey: any;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.rentalTypeEnum=RentalTypeEnum;
        this.paymentTypeEnum=PaymentTypeEnum;
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
            console.log(this.id);
        })
    }

    ngOnInit(): void {
      this.rentalTypeEnum = RentalTypeEnum;
        this.paymentTypeEnum = PaymentTypeEnum;
        this.rentalkey = Object.keys(this.rentalTypeEnum).filter(Number);
        this.paymentkey = Object.keys(this.paymentTypeEnum).filter(Number);

        this.get({path:'api/rental', params: [this.id] ,queryParams:{RentalId:this.id}}).subscribe((t:vRentalRecord) => {
          console.log(t);
          this.rentalRecord = t;
          this.get({path:'api/createBookbed', params: [this.id] ,queryParams:{UserId:t.userId}}).subscribe((t:any) => {
            this.rentalBookBeds = new List<vBookBed>(t,vBookBed);
            console.log(t);
            this.rentalBookBeds=t;
            this.isLoad=true;

          })

        })

    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
