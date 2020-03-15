import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvAvailableBed } from '../domain/abstract-v-available-bed';
import { vAvailableBed } from "@app/models";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: "app-v-available-bed-list",
    templateUrl: './v-available-bed-list.component.html'
})
export class vAvailableBedListComponent extends AbstractvAvailableBed implements OnInit, OnDestroy {
    vAvailableBed: List<vAvailableBed>;
    subscription: Subscription;
    getbedNumber: number;
    getbedId: number;
    result: any;
    getuserId: any;
    isShow: boolean = false;

    constructor(private router: Router, private toastr: ToastrService) {
        super();

    }
    ngOnInit(): void {
        
        this.subscription = this.get().subscribe((t: List<vAvailableBed>) => {
            this.vAvailableBed = t;
            console.log(t.length);
            if (t.length == 0) {
                this.isShow = true;
            }
        })
    }


    getBedNumber(BedNumber: number, BedId: number) {
        this.getbedNumber = BedNumber;
        this.getbedId = BedId;
    }


    sendRequest() {
        this.post({ path: 'api/Requester', body: { UserId: 23, BedId: this.getbedId } }).subscribe(t => {
            this.result = t;
            this.showSuccess();
            location.reload();
        })

        this.patch({ path: 'api/Bed', params: [this.getbedId], body: { BedId: this.getbedId, BedStatus: 0 } }).subscribe(t => {
            this.result = t;
            console.log('bed');
            console.log(t);
        })
        // this.router.navigate(['client-index']);
    }

    showSuccess() {
        this.toastr.success('Request send Successfully !!!!');
     
    }

    onSelect(val: HTMLInputElement) {
        console.log(val.value);

        //this.selectedData = this.someData.filter(x => x.value == val)
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
