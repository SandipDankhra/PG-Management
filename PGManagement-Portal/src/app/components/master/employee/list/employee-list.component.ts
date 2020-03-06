import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractEmployee } from '../domain/abstract-employee';
import { Employee } from "@app/models";
import { Subscription } from 'rxjs';
import { vEmployeeRecord } from "@app/models";
import { anonymous } from '@rxweb/angular-router';
import { Router } from '@angular/router';
@anonymous()
@Component({
    selector:"app-employee-list",
    templateUrl:'./employee-list.component.html'
})
export class EmployeeListComponent extends AbstractEmployee implements OnInit, OnDestroy {
    vemployee: List<vEmployeeRecord>;
    subscription: Subscription;
    id:Number;
    result:any;
    searchText:any;

    constructor(private router:Router){
        super();
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vEmployeeRecord>) => {
            console.log(t);
            this.vemployee = t;
        })
    }

    Delete(id:number) 
    {
       this.id=id;
    }
// edit(id:number)
// {
//     this.router.navigate(['edit'],)
// }
    onConfirm(){
        console.log(this.id);
        this.delete({ params: [this.id], body: {'EmployeeId':this.id} }).subscribe(res => {
            this.result = res;
       })
        location.reload();
    }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
