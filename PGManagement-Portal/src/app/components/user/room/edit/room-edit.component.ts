import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRoom } from '../domain/abstract-room';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Room } from '@app/models';

@Component({
    selector: "app-room-edit",
    templateUrl: './room-edit.component.html'
})
export class RoomEditComponent extends AbstractRoom implements OnInit, OnDestroy {
    room: Room;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.roomFormGroup = this.formBuilder.formGroup(Room,t) as IFormGroup<Room>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
