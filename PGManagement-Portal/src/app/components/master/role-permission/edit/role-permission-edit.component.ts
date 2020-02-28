import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRolePermission } from '../domain/abstract-role-permission';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { RolePermission } from '@app/models';

@Component({
    selector: "app-role-permission-edit",
    templateUrl: './role-permission-edit.component.html'
})
export class RolePermissionEditComponent extends AbstractRolePermission implements OnInit, OnDestroy {
    rolePermission: RolePermission;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.rolePermissionFormGroup = this.formBuilder.formGroup(RolePermission,t) as IFormGroup<RolePermission>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
