import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Room } from '@app/models';
import { AbstractRoom } from '../domain/abstract-room';

@Component({
    selector: "app-room-add",
    templateUrl: './room-add.component.html'
})
export class RoomAddComponent extends AbstractRoom implements OnInit, OnDestroy {
    room: Room;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.room = new Room();
        this.roomFormGroup = this.formBuilder.formGroup(this.room) as IFormGroup<Room>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
