import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCreateBookBed } from '../domain/abstract-create-book-bed';
import { CreateBookBed } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-create-book-bed-list",
    templateUrl:'./create-book-bed-list.component.html'
})
export class CreateBookBedListComponent extends AbstractCreateBookBed implements OnInit, OnDestroy {
    createBookBed: List<CreateBookBed>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<CreateBookBed>) => {
            this.createBookBed = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
