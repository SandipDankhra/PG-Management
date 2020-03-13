import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Bed } from '@app/models';
import { AbstractBed } from '../domain/abstract-bed';
import { anonymous } from '@rxweb/angular-router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "app-bed-add",
    templateUrl: './bed-add.component.html'
})
export class BedAddComponent extends AbstractBed implements OnInit, OnDestroy {
    bed: Bed;
    result: any;
    roomId: number;
    subscription: Subscription;

    constructor(private toast:ToastrService,private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
        super();
        this.activatedRoute.params.subscribe(a => {
            this.roomId = a['id'];
        })

    }

    onAddBed() {
        

        // this.post({body:this.room}).subscribe(t=>{
        this.post({
            body: {
                RoomId: this.roomId,
                bedNumber: this.bedFormGroup.controls.bedNumber.value,
                bedStatus: this.bedFormGroup.controls.bedStatus.value,
                bedPrice: this.bedFormGroup.controls.bedPrice.value
            }


        }).subscribe(t => {
            this.result = t;
            this.onSuccess();

        })
        //console.log(this.roomFormGroup.controls.roomType.value);
        this.bedFormGroup.reset();
        //this.router.navigateByUrl('/bed');
    }

    ngOnInit(): void {
        this.bed = new Bed();
        this.bedFormGroup = this.formBuilder.formGroup(this.bed) as IFormGroup<Bed>;
        this.bedFormGroup.controls.roomId.patchValue(this.roomId);
    }

    onShowBed() {
        this.router.navigateByUrl('/bed');
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }


    onSuccess(){
        this.toast.success("Bed added succesfully");
    }

    onGoBack(){
        this.router.navigateByUrl('/room');
    }
}
