import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup, RxFormGroup } from '@rxweb/reactive-form-validators';
import { RoomTypeEnum } from '@app/enums';
import { Room } from '@app/models';
import { AbstractRoom } from '../domain/abstract-room';
import { ActivatedRoute, Router } from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
    selector: "app-room-add",
    templateUrl: './room-add.component.html'
})
export class RoomAddComponent extends AbstractRoom implements OnInit, OnDestroy {
    room: Room;
    result: any;
    roomTypeEnum: any;
    keys: any;
    subscription: Subscription;
    flatId: number;

    constructor(private toast:ToastrService,private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
        super();
        this.activatedRoute.params.subscribe(a => {
            this.flatId = a['id'];
        })

    }

    ngOnInit(): void {
        this.roomTypeEnum = RoomTypeEnum;
        this.room = new Room();
        this.keys = Object.keys(this.roomTypeEnum).filter(Number);
        this.roomFormGroup = this.formBuilder.formGroup(this.room) as IFormGroup<Room>;
        this.roomFormGroup.controls.flatId.patchValue(this.flatId);

    }
    onAddRoom() {
       

        // this.post({body:this.room}).subscribe(t=>{
        this.post({
            body: {
                FlatId: this.flatId,
                roomNumber: this.roomFormGroup.controls.roomNumber.value,
                roomType: this.roomFormGroup.controls.roomType.value,
                roomSharing: this.roomFormGroup.controls.roomSharing.value
                
            }



        }).subscribe(t => {
            this.result = t;
            this.onSuccess();

        })
        //console.log(this.roomFormGroup.controls.roomType.value);
        this.roomFormGroup.reset();
    }
    onShowRoom() {
        //this.onSuccess();
        this.router.navigateByUrl('/room');
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    onSuccess(){
        this.toast.success("Room Added Succesfully");
    }

    onGoBack(){
        this.router.navigateByUrl('/flat');
    }


}
