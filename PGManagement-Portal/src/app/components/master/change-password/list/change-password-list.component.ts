import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractChangePassword } from '../domain/abstract-change-password';
import { ChangePassword } from "@app/custom-models";
import { Subscription } from 'rxjs';

@Component({
    selector: "app-change-password-list",
    templateUrl: './change-password-list.component.html'
})
export class ChangePasswordListComponent extends AbstractChangePassword implements OnInit, OnDestroy {
    changePassword: List<ChangePassword>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<ChangePassword>) => {
            this.changePassword = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
