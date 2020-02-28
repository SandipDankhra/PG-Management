import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractEmployee } from '../domain/abstract-employee';
import { Employee } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-employee-list",
    templateUrl:'./employee-list.component.html'
})
export class EmployeeListComponent extends AbstractEmployee implements OnInit, OnDestroy {
    employee: List<Employee>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Employee>) => {
            this.employee = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
