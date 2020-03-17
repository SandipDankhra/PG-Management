import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup, RxwebValidators } from '@rxweb/reactive-form-validators';

import { Expens } from '@app/models';
import { AbstractExpense } from '../domain/abstract-expense';



@Component({
    selector: "app-expense-add",
    templateUrl: './expense-add.component.html'
})
export class ExpenseAddComponent extends AbstractExpense implements OnInit, OnDestroy {
    expens: Expens;
    subscription: Subscription;
    result: any;
    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.expens = new Expens();
        this.expenseFormGroup = this.formBuilder.formGroup(this.expens) as IFormGroup<Expens>;
    }

    onSubmit() {
        this.post({ body: this.expens }).subscribe(t => {
            this.result = t;
            if(this.result)
            {
            this.expenseFormGroup.reset();
            }
        })
        this.expenseFormGroup.submitted=true;
    }

    onReset() {
        this.expenseFormGroup.reset();
    } 

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
