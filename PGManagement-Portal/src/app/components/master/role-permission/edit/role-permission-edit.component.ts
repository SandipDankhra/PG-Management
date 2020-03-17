import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRolePermission } from '../domain/abstract-role-permission';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { RolePermission, ApplicationModule, vRolePermission } from '@app/models';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { List } from '@rxweb/generics';

@Component({
    selector: "app-role-permission-edit",
    templateUrl: './role-permission-edit.component.html'
})
export class RolePermissionEditComponent extends AbstractRolePermission implements OnInit, OnDestroy {
    rolePermission: List<vRolePermission>;
    subscription: Subscription;
    id: number;
    roleFormGroup: FormGroup;
    permissionFormArray: FormArray;
    isLoad: boolean = false;
    constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.params.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id], queryParams: { roleId: this.id } }).subscribe((t: List<vRolePermission>) => {
            this.rolePermission = t
            console.log(this.rolePermission);

            for (let rolePermission of t) {
                this.addFormGroup(rolePermission);
            }
            this.isLoad = true;
        })
        this.roleFormGroup = this.formBuilder.group({
            permission: new FormArray([])
        });
        this.permissionFormArray = this.roleFormGroup.controls.permission as FormArray;
    }
    addFormGroup(rolePermission: vRolePermission) {
        this.permissionFormArray.push(this.formBuilder.group({
            RoleId: [rolePermission.roleId],
            ApplicationModuleId: [rolePermission.applicationModuleId],
            ApplicationModuleName: [rolePermission.applicationModuleName],
            CanView: [rolePermission.canView],
            CanAdd: [rolePermission.canAdd],
            CanEdit: [rolePermission.canEdit],
            CanDelete: [rolePermission.canDelete],
            PermissionPriority: [rolePermission.permissionPriority],
        }))
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    submit() {
        console.log(JSON.parse(JSON.stringify(this.roleFormGroup.controls.permission.value)));
        let jsonstring = JSON.parse(JSON.stringify(this.roleFormGroup.controls.permission.value))
        console.log(jsonstring);
        this.post({ body: { rolePermissions: jsonstring } }).subscribe(t => { console.log(t) })
    }

}
