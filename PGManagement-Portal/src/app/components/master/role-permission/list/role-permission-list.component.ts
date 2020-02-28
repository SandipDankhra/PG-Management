import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRolePermission } from '../domain/abstract-role-permission';
import { RolePermission } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-role-permission-list",
    templateUrl:'./role-permission-list.component.html'
})
export class RolePermissionListComponent extends AbstractRolePermission implements OnInit, OnDestroy {
    rolePermission: List<RolePermission>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<RolePermission>) => {
            this.rolePermission = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
