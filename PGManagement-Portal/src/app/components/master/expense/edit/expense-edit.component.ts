import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractExpense } from '../domain/abstract-expense';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Expense } from '@app/models';

@Component({
    selector: "app-expense-edit",
    templateUrl: './expense-edit.component.html'
})
export class ExpenseEditComponent extends AbstractExpense implements OnInit, OnDestroy {
    expense: Expense;
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
            this.expenseFormGroup = this.formBuilder.formGroup(Expense,t) as IFormGroup<Expense>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
