import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRoom } from '../domain/abstract-room';
import { Room } from "@app/models";
import {Flat} from "@app/models"
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector:"app-room-list",
    templateUrl:'./room-list.component.html'
})
export class RoomListComponent extends AbstractRoom implements OnInit, OnDestroy {
    room: List<Room>;
    //flat:List<Flat>;
    subscription: Subscription;

    constructor (private router:Router){
        super();
    }

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Room>) => {
            this.room = t;
            
        })
    }

    EditRoom(){
        
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
