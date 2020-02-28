import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { RolePermission } from '@app/models';
import { AbstractRolePermission } from '../domain/abstract-role-permission';

@Component({
    selector: "app-role-permission-add",
    templateUrl: './role-permission-add.component.html'
})
export class RolePermissionAddComponent extends AbstractRolePermission implements OnInit, OnDestroy {
    rolePermission: RolePermission;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.rolePermission = new RolePermission();
        this.rolePermissionFormGroup = this.formBuilder.formGroup(this.rolePermission) as IFormGroup<RolePermission>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
