import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRoom } from '../domain/abstract-room';
import { Room } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-room-list",
    templateUrl:'./room-list.component.html'
})
export class RoomListComponent extends AbstractRoom implements OnInit, OnDestroy {
    room: List<Room>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Room>) => {
            this.room = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
