import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { CreateEmployee } from '@app/custom-models';
import { vEmployee } from '@app/models';
import { AbstractEmployee } from '../domain/abstract-employee';


@Component({
    selector: "app-employee-add",
    templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent extends AbstractEmployee implements OnInit, OnDestroy {
    employee: CreateEmployee;
    subscription: Subscription;
    result: any;
    today: number = Date.now();
    currentDate:number;
date:any;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.employee = new CreateEmployee();
        this.createEmployeeFormGroup = this.formBuilder.formGroup(this.employee) as IFormGroup<CreateEmployee>;
    }

onSubmit() {
        if(this.createEmployeeFormGroup.valid){
        this.post({ body: this.employee }).subscribe(t => {
            this.result = t;
            console.log(this.result);
            if(this.result==0){
                this.createEmployeeFormGroup.reset();
                }
            })
        }
            this.createEmployeeFormGroup.submitted = true;
    }
onReset() {
        this.createEmployeeFormGroup.reset();
    }   
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
