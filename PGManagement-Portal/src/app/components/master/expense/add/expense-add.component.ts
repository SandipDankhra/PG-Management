import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup, RxwebValidators } from '@rxweb/reactive-form-validators';

import { Expense } from '@app/models';
import { AbstractExpense } from '../domain/abstract-expense';
import { anonymous } from '@rxweb/angular-router';


@anonymous()
@Component({
    selector: "app-expense-add",
    templateUrl: './expense-add.component.html'
})
export class ExpenseAddComponent extends AbstractExpense implements OnInit, OnDestroy {
    expense: Expense;
    subscription: Subscription;
    result:any;
    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.expense = new Expense();
        this.expenseFormGroup = this.formBuilder.formGroup(this.expense) as IFormGroup<Expense>;
    }

    onSubmit(){    
        this.post({body:this.expenseFormGroup.value}).subscribe(t=>{
            this.result=t;
            this.expenseFormGroup.reset();           
        })


        
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
