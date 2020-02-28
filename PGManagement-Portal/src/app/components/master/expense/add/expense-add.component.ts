import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Expense } from '@app/models';
import { AbstractExpense } from '../domain/abstract-expense';

@Component({
    selector: "app-expense-add",
    templateUrl: './expense-add.component.html'
})
export class ExpenseAddComponent extends AbstractExpense implements OnInit, OnDestroy {
    expense: Expense;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.expense = new Expense();
        this.expenseFormGroup = this.formBuilder.formGroup(this.expense) as IFormGroup<Expense>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
