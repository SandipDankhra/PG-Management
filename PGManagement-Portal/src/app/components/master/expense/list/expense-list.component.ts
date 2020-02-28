import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractExpense } from '../domain/abstract-expense';
import { Expense } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-expense-list",
    templateUrl:'./expense-list.component.html'
})
export class ExpenseListComponent extends AbstractExpense implements OnInit, OnDestroy {
    expense: List<Expense>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Expense>) => {
            this.expense = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
