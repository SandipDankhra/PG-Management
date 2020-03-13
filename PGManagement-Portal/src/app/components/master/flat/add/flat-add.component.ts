import { Component, OnInit, OnDestroy } from "@angular/core"
import { Router } from "@angular/router"
import { Subscription, from } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Flat } from '@app/models';
import { AbstractFlat } from '../domain/abstract-flat';
import { anonymous } from '@rxweb/angular-router';
import {  ToastrService } from 'ngx-toastr';


@Component({
    selector: "app-flat-add",
    templateUrl: './flat-add.component.html'
})
export class FlatAddComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: Flat;
    result: any;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder, private router: Router, private toastr:ToastrService) {
        super();
    }

    ngOnInit(): void {
        this.flat = new Flat();
        this.flatFormGroup = this.formBuilder.formGroup(this.flat) as IFormGroup<Flat>;
    }

    onAddFlat() {
        console.log(this.flatFormGroup.valid);
        this.post({ body: this.flat }).subscribe(t => {
            this.result = t;
            //console.log(this.result);
            this.onSuccess();
            this.router.navigateByUrl('/flat');
        })

        this.flatFormGroup.reset();
       
    }
    onGoBack() {
        this.router.navigateByUrl('/flat');
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    onSuccess(){
        this.toastr.success("Flat added successfully");
        // location.reload();
    }

}
