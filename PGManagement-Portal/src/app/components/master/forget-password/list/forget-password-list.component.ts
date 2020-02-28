import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractForgetPassword } from '../domain/abstract-forget-password';
import { User, Authentication } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector: "app-forget-password-list",
    templateUrl: './forget-password-list.component.html'
})
export class ForgetPasswordListComponent extends AbstractForgetPassword implements OnInit, OnDestroy {
    user: List<User>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<User>) => {
            this.user = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
