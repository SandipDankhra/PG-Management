import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
// import { RxHttp, http } from "@rxweb/http";
import { AbstractExpense } from '../domain/abstract-expense';
// import { Expense } from "@app/models";
import { Subscription } from 'rxjs';
// import {Router} from "@angular/router"
import { vExpense } from "@app/models";
@Component({
    selector: "app-expense-list",
    templateUrl: './expense-list.component.html'
})
export class ExpenseListComponent extends AbstractExpense implements OnInit, OnDestroy {
    // expense: List<Expense>;
    vexpense: List<vExpense>;
    subscription: Subscription;
    result: any;
    id: Number;
    searchText: any;
    //    constructor(private http:RxHttp){
    //        super();
    //        this.post('https://localhost:44352/api/expensesearch')
    //    }

    ngOnInit(): void {
        this.Get();
    }
    Get() {
        this.subscription = this.get().subscribe((t: List<vExpense>) => {
            this.vexpense = t;
            console.log(this.vexpense);
        })
    }
    Delete(id: number) {
        this.id = id;
    }

    onConfirm() {
        this.delete({path:"api/Expense", params: [this.id], body: {} }).subscribe(res => {
            this.result = res;
        })
        location.reload();
    }

    onSearch(startDate: HTMLInputElement, endDate: HTMLInputElement) {
        this.post({ path: 'api/SearchExpense', body: { startDate: startDate.value, lastDate: endDate.value } }).subscribe((res: any) => {
            this.vexpense = JSON.parse(res);
            console.log(this.vexpense);
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
