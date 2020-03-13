import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractEmployee } from '../domain/abstract-employee';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';

import { vEmployeeRecord, vEmployeeRec, Employee } from '@app/models';

@Component({
    selector: "app-employee-edit",
    templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent extends AbstractEmployee implements OnInit, OnDestroy {
    employee: vEmployeeRec;
    subscription: Subscription;
    id: any;
    isload: boolean=true;
result:any;
    constructor(private router:Router ,private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        // this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.activatedRoute.params.subscribe(t=>(this.id=t.id));
    }

    ngOnInit(): void {
        this.isload=false;
        console.log("id"+this.id);
        this.get({params:[this.id],queryParams:{employeeId:this.id}} ).subscribe((t:vEmployeeRec) => {
            console.log(t);
            this.employee= new vEmployeeRec();
            // this.employeeFormGroup = this.formBuilder.formGroup(this.employee) as IFormGroup<vEmployeeRec>;
            this.employeeFormGroup = this.formBuilder.formGroup<vEmployeeRec>(vEmployeeRec,t) as IFormGroup<vEmployeeRec>;
            // this.employeeFormGroup.controls.firstName.setValue(t.firstName);
            this.employeeFormGroup.controls.employeeId.patchValue(t.employeeId);    
            this.isload=true;
        })
    }

    saveChanges(){
        this.put({params:[this.id],body:this.employeeFormGroup.value}).subscribe(t=>{
            this.result=t;
        }) 
    }


    // onCancel(){
    //     this.employeeFormGroup.reset();
    // }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
