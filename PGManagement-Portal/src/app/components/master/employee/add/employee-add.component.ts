import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Employee } from '@app/models';
import { AbstractEmployee } from '../domain/abstract-employee';

@Component({
    selector: "app-employee-add",
    templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent extends AbstractEmployee implements OnInit, OnDestroy {
    employee: Employee;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.employee = new Employee();
        this.employeeFormGroup = this.formBuilder.formGroup(this.employee) as IFormGroup<Employee>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
