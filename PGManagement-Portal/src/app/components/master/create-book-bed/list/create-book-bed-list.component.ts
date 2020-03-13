import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';
import { CreateBookBed } from "@app/custom-models";
import { Subscription } from 'rxjs';
import { PaymentTypeEnum } from '@app/enums';
import { vBookBed } from '@app/models';
import {Route, Router} from '@angular/router'


@Component({
    selector: "app-create-book-bed-list",
    templateUrl: './create-book-bed-list.component.html'
})
export class CreateBookBedListComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: List<vBookBed>;
    subscription: Subscription;
    paymentTypeIdEnum:any;
    result:any; 
    constructor( private router:Router)
    {
        super();
        this.paymentTypeIdEnum=PaymentTypeEnum;
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vBookBed>) => {
            console.log(t);
            this.createBookBed = t;
        })
    }

    Invoice(){
        // this.post({path:'api/vInvoiceRecord' ,body:{}}).subscribe(res=>
        //     {
        //         this.result=res;
        //     })
            this.router.navigate(['/v-invoice-record','cbt.bookBedId']);

    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
