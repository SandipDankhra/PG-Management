
import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFlat } from '../domain/abstract-flat';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';

import { Flat } from '@app/models';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "app-flat-edit",
    templateUrl: './flat-edit.component.html'
})
export class FlatEditComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: Flat;
    subscription: Subscription;
    id: number;
    result: any;
    display:boolean=false;

    constructor(private router:Router,private toast:ToastrService,private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
            
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.flatFormGroup = this.formBuilder.formGroup(Flat,t) as IFormGroup<Flat>;
            //console.log(this.flatFormGroup);
            this.display=true;
        })
    }
    onGoBack(){
        this.router.navigateByUrl('/flat');
    }
    onUpdateFlat(){
        this.put({params:[this.id], body: this.flatFormGroup.value }).subscribe(t => {
            this.result = t;
            //console.log(this.result);
            this.onSuccess();
            this.router.navigateByUrl('/flat');
        })
    }
    onSuccess(){
        this.toast.success("Flat updated successfully");
        // location.reload();
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
