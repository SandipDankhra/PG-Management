import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractEmployee } from '../domain/abstract-employee';
import { Employee, vEmployeeRec } from "@app/models";
import { Subscription } from 'rxjs';
import { vEmployeeRecord } from "@app/models";
import { Router } from '@angular/router';


@Component({
    selector: "app-employee-list",
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent extends AbstractEmployee implements OnInit, OnDestroy {
    vemployee: List<vEmployeeRec>;
    subscription: Subscription;
    employeeId: Number;
    result: any;
    searchText: any;
    uId: number;

    constructor(private router: Router) {
        super();
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vEmployeeRec>) => {
            console.log(t);
            this.vemployee = t;
        })
    }

    Delete(id: number, uid: number) {
        this.employeeId = id;
        this.uId = uid;
    }
    // edit(id:number)
    // {
    //     this.router.navigate(['edit'],)
    // }
    onConfirm() {

        // this.patch({ path: 'api/Registration', params: [this.uId], body: { UserId:this.uId,StatusId: 3 } }).subscribe(t => {
        //     this.result = t;
        //     console.log(t);
        // })

        console.log(this.employeeId);
        this.delete({ params: [this.employeeId], queryParams: { EmployeeId: this.employeeId }, body: {} }).subscribe(res => {
            this.result = res;
        })
       
        location.reload();
    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
