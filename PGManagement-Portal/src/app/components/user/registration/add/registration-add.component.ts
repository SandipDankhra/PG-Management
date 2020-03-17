import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import { anonymous, route } from '@rxweb/angular-router'
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@app/models';
import { AbstractRegistration } from '../domain/abstract-registration';
import { RxHttp, http } from '@rxweb/http';
import { Router } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@Component({
    selector: "app-registration-add",
    templateUrl: './registration-add.component.html',

})
export class RegistrationAddComponent extends AbstractRegistration implements OnInit, OnDestroy {
    registration: User;
    
    result: any;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder, private http: RxHttp, private toastr: ToastrService, private router: Router) {
        super();
    }

    ngOnInit(): void {
        this.registration = new User();
        this.registrationFormGroup = this.formBuilder.formGroup(this.registration) as IFormGroup<User>;

    }

    registerUser() {

       
      
            this.get({ queryParams: this.registration }).subscribe(t => {
                // this.showSuccess();
                if(this.registration.email==t)
                {
                    ToastrModule.forRoot({
                        positionClass: 'toast-top-center', timeOut: 10000
                      })
                    this.toastr.warning('User '+ this.registration.email+' Already Exist');
                }
                else{
                    
                    this.showSuccess();

                    this.router.navigateByUrl('/clientlogin');
                }
                // console.log(t);
                // this.router.navigate(['client-index']);
            })
            // this.registrationFormGroup.reset();
            // this.registrationFormGroup.controls.confirmPassword.reset();
    
        

}

    showSuccess() {
        this.toastr.success('Registration Successfully  !!!!');
        this.router.navigate(['client-index']);
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
