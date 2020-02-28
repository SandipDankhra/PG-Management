import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRegistration } from '../domain/abstract-registration';
import { User } from '@app/models';
import { Subscription } from 'rxjs';

@Component({
    selector:"app-registration-list",
    templateUrl:'./registration-list.component.html'
})
export class RegistrationListComponent extends AbstractRegistration implements OnInit, OnDestroy {
    registration: List<User>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<User>) => {
            this.registration = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
