import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBed } from '../domain/abstract-bed';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';

import { Bed } from '@app/models';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "app-bed-edit",
    templateUrl: './bed-edit.component.html'
})
export class BedEditComponent extends AbstractBed implements OnInit, OnDestroy {
    bed: Bed;
    subscription: Subscription;
    id: number;
    display:boolean=false;
    result:any;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute,private toast:ToastrService,private router:Router) {
        super();

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];              
        });
        console.log(this.id);
        this.get({ params: [this.id] }).subscribe(t => {
            this.bedFormGroup = this.formBuilder.formGroup(Bed, t) as IFormGroup<Bed>;
            this.display=true;
        })
    }
    onUpdateBed(){
        this.put({params:[this.id], body: this.bedFormGroup.value }).subscribe(t => {
            this.result = t;
            //console.log(this.result);
            this.onSuccess();
            this.router.navigateByUrl('/bed');
        })
    }

    onSuccess(){
        this.toast.success("Bed updated successfully");
        
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
