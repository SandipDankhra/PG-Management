import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvAvailableBed } from '../domain/abstract-v-available-bed';
import { vAvailableBed } from "@app/models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';
import { Router } from '@angular/router';

@anonymous()
@Component({
    selector: "app-v-available-bed-list",
    templateUrl: './v-available-bed-list.component.html'
})
export class vAvailableBedListComponent extends AbstractvAvailableBed implements OnInit, OnDestroy {
    vAvailableBed: List<vAvailableBed>;
    subscription: Subscription;
    getbedNumber: number;
    getbedId:number;
    result: any;
    getuserId:any;

    constructor(private router: Router) {
        super();
        
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vAvailableBed>) => {
            this.vAvailableBed = t;
        })
    }

    getBedNumber(BedNumber: number,BedId:number) {
        this.getbedNumber = BedNumber;
        this.getbedId = BedId;
    }


    sendRequest() {

        this.post({ path: 'api/requester', body: { UserId: 23, BedId: this.getbedId } }).subscribe(t => {
            console.log(this.getbedId);
            this.result = t;
            console.log(t);
        })
        this.router.navigate(['client-index']);

    }

    onSelect(val:HTMLInputElement){
        console.log(val.value);

        //this.selectedData = this.someData.filter(x => x.value == val)
      }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
