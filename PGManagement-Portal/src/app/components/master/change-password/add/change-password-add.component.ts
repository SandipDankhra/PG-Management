import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ChangePassword } from '@app/custom-models';
import { AbstractChangePassword } from '../domain/abstract-change-password';

@Component({
    selector: "app-change-password-add",
    templateUrl: './change-password-add.component.html'
})
export class ChangePasswordAddComponent extends AbstractChangePassword implements OnInit, OnDestroy {
    changePassword: ChangePassword;
    subscription: Subscription;
    isShow=false;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.changePassword = new ChangePassword();
        this.changePasswordFormGroup = this.formBuilder.formGroup(this.changePassword) as IFormGroup<ChangePassword>;
        this.changePassword.userId = 5;//component interaction userid fro rental profile
    }
// checkOld(){
// this.get().subscribe(t=>{
//     console.log(t)
//     this.changePassword.oldPassword=t;
//     if(this.changePasswordFormGroup.controls.oldPassword.value==this.changePassword.oldPassword)
//     {
//         this.isShow=true;
//     }
// })
// }
    


onSubmit(){
    this.get({queryParams:this.changePassword}).subscribe(t=>{
console.log(t);
    })
    
}
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
