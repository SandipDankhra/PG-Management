import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { RentalTypeEnum, PaymentTypeEnum } from '@app/enums';
import { RxFormBuilder, IFormGroup, RxFormGroup } from '@rxweb/reactive-form-validators';

import { CreateBookBed } from '@app/custom-models';
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';

import { User } from '@app/models';
import { List } from '@rxweb/generics';
import { anonymous } from '@rxweb/angular-router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: "app-create-book-bed-add",
    templateUrl: './create-book-bed-add.component.html'
})
export class CreateBookBedAddComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: CreateBookBed;
    subscription: Subscription;
    users: List<User>;
    userid: any;
    rentalTypeEnum: any;
    paymentTypeEnum: any;
    keys: any;
    result: any;
    key: any;
    bedid: any;
    id: number;
    disable: boolean = true;
    createBookBedFormgroup: RxFormGroup;
    // keyspay:any;

    constructor(private router:Router,private toast:ToastrService,private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private rxFormBuilder: RxFormBuilder) {
        super();
        this.activatedRoute.params.subscribe(t => {
            // this.id = t['userId/bedId'];
            this.userid = t['userId'];
            this.bedid = t['bedId'];
            //console.log(this.userid);
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
        this.createBookBed.bedId = this.bedid;
        this.createBookBedFormGroup = this.rxFormBuilder.formGroup(this.createBookBed) as IFormGroup<CreateBookBed>;
        // this.createBookBedFormgroup = this.formBuilder.group({
        //     'userId': [''],
        //     'bedId': [''],
        //     'rentalCity': [''],
        //     'rentalType': [''],
        //     'paymentTypeId': [''],
        //     'paymentAmount': [''],
        //     'startDate': [''],
        //     'endDate': ['']

        // });
        this.createBookBedFormGroup.controls.userId.patchValue(this.userid);
        this.createBookBedFormGroup.controls.bedId.patchValue(this.bedid);
        this.createBookBedFormGroup.controls.userId.disable({ onlySelf: true });
        this.createBookBedFormGroup.controls.bedId.disable({ onlySelf: true });

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
        // this.post({
        //     body: {
        //         UserId:this.userid,
        //         BedId: this.bedid,
        //         //userId: this.createBookBedFormgroup.controls.userId.value,
        //         rentalCity: this.createBookBedFormgroup.controls.rentalCity.value,
        //         rentalType: this.createBookBedFormgroup.controls.rentalType.value,
        //         paymentTypeId: this.createBookBedFormgroup.controls.paymentTypeId.value,
        //         paymentAmount: this.createBookBedFormgroup.controls.paymentAmount.value,
        //         startDate: this.createBookBedFormgroup.controls.startDate.value,
        //         endDate: this.createBookBedFormgroup.controls.endDate.value
        //         // this.createBookBed
        //     }
        // UserId: this.userid.value;
        // BedId: this.bedid.value;
        this.post({ body: this.createBookBed }).subscribe(t => {
            this.result = t;
            
            this.onSuccess();
            
        })

        // }).subscribe(t => {
        //     this.result = t;
        // })

    }
    onSuccess(){
        this.toast.success("Book Bed created successfully");
        // this.router.navigate(['bed/edit'],{queryParams:{id:this.bedid}});
        this.router.navigateByUrl('/requester');
    }
   

}
