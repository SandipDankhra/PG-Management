import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBed } from '../domain/abstract-bed';
import { Bed, vBed } from "@app/models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-bed-list",
    templateUrl: './bed-list.component.html'
})
export class BedListComponent extends AbstractBed implements OnInit, OnDestroy {
    bed: List<vBed>;
    subscription: Subscription;

    constructor(private router:Router,private activatedRoute:ActivatedRoute){
        super();
    }

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vBed>) => {
            this.bed = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    onHome(){
        this.router.navigateByUrl('');
    }

   
 

}
