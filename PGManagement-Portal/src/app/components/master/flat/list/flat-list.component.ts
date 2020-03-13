import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFlat } from '../domain/abstract-flat';
import { Flat } from '@app/models';
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';
import { Router } from '@angular/router';

@Component({
    selector: "app-flat-list",
    templateUrl: './flat-list.component.html'
})
export class FlatListComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: List<Flat>;
    result: any;
    subscription: Subscription;

    constructor(private router: Router) {
        super();
    }

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Flat>) => {
            this.flat = t;
            console.log(t);
        })
    }

    AddFlat() {
        this.router.navigateByUrl('/flat/add');
    }
    // EditFlat() {
    //     this.router.navigateByUrl('/flat/edit');
    // }


    // DeleteFlat(id:number){
    //     this.delete({ params: [id],  body:{}   }).subscribe(res => {
    //         this.result = res;
    //     })


    // }




    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
