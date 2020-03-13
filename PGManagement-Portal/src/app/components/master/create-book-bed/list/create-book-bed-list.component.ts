import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';
import { CreateBookBed } from "@app/custom-models";
import { Subscription } from 'rxjs';
import { PaymentTypeEnum } from '@app/enums';
import { vBookBed } from '@app/models';
import { AppGrid } from 'src/app/domain/app-grid';
import { Router } from '@angular/router';
// import { SummaryViewModel } from 'src/app/view-model/summary-view-model';



@Component({
    selector: "app-create-book-bed-list",
    templateUrl: './create-book-bed-list.component.html'
})
export class CreateBookBedListComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: List<vBookBed>;
    subscription: Subscription;
    paymentTypeIdEnum:any;
    // summaryGrid:AppGrid;
    // summaryList:SummaryViewModel[];

    constructor(private router:Router)
    {
        super();
        this.paymentTypeIdEnum=PaymentTypeEnum;
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vBookBed>) => {
            console.log(t);
            this.createBookBed = t;
            // this.summaryGrid = new AppGrid(this.summaryList,SummaryViewModel,{actions:{onInvitedLink:this.createBookBed.bind(this),
            //     onAcceptedLink:this.firstName.bind(this),
                
            //      }});
        })
    }

    Invoice(){

    }
    onHomePage(){
        this.router.navigateByUrl('');
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
