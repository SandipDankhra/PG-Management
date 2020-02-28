import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractEmployee } from '../domain/abstract-employee';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '@app/models';

@Component({
    selector: "app-employee-edit",
    templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent extends AbstractEmployee implements OnInit, OnDestroy {
    employee: Employee;
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
            this.employeeFormGroup = this.formBuilder.formGroup(Employee,t) as IFormGroup<Employee>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
