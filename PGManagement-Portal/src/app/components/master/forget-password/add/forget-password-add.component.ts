import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { User, Authentication } from '@app/models';
import { AbstractForgetPassword } from '../domain/abstract-forget-password';

@Component({
    selector: "app-forget-password-add",
    templateUrl: './forget-password-add.component.html',
    styleUrls:['./forget-password-add.component.css'],
})
export class ForgetPasswordAddComponent extends AbstractForgetPassword implements OnInit, OnDestroy {
    authentication: Authentication;
    result:any;
    subscription: Subscription;
    showotpblock:boolean=false;
    showpasswordBlock:boolean=false;
    constructor(private formBuilder: RxFormBuilder) {
        super();
    }
  
  

    ngOnInit(): void {
        this.authentication = new Authentication();
        this.forgetPasswordFormGroup = this.formBuilder.formGroup(this.authentication) as IFormGroup<Authentication>;
    }

    sendOtp(){
        this.showotpblock=true;
             this.get({params:[1],queryParams:{MobileNumber:this.forgetPasswordFormGroup.controls.mobileNumber.value}}).subscribe(res=>{
            this.result=res;
            console.log(res);

        })
    }
    confirmOtp()
    {
        this.get({queryParams:{UserId:this.result,Otp:this.forgetPasswordFormGroup.controls.otp.value}}).subscribe(res=>{
            if(res!=null)
            {
                this.showpasswordBlock=true;
            }
            console.log(res);
        })
    }
    
    changePassword(){
        this.put({params:[this.result],body:{UserId:this.result,userPassword:this.forgetPasswordFormGroup.controls.userPassword.value,
            Otp:this.forgetPasswordFormGroup.controls.otp.value}}).subscribe(res=>{       
            this.result=res;
            console.log(res);
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
