import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup, RxFormGroup } from '@rxweb/reactive-form-validators';

import { RolePermission, ApplicationModule } from '@app/models';
import { AbstractRolePermission } from '../domain/abstract-role-permission';
import { FormGroup, FormArray } from '@angular/forms';
import { List } from '@rxweb/generics';

@Component({
    selector: "app-role-permission-add",
    templateUrl: './role-permission-add.component.html'
})
export class RolePermissionAddComponent extends AbstractRolePermission implements OnInit, OnDestroy {
    rolePermission: RolePermission;
    subscription: Subscription;
    roleFormGroup: FormGroup;
    permissionFormArray: FormArray;
    applicationModules: List<ApplicationModule>;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.get({ path: 'api/ApplicatioModuleLookup/ApplicationModuleLookups' }).subscribe((t: List<ApplicationModule>) => {
            this.applicationModules = t;
        })
        this.rolePermission = new RolePermission();
        this.roleFormGroup = this.formBuilder.group({
            permission: new FormArray([])
        });
        this.permissionFormArray = this.roleFormGroup.controls.permission as FormArray;

    }
    addFormGroup(applicationModule: ApplicationModule) {
        this.permissionFormArray.push(this.formBuilder.group({
            RoleId: [],
            ApplicationModuleId: [applicationModule.applicationModuleId],
            CanView: [],
            CanAdd: [],
            CanEdit: [],
            CanDelete: [],
            PermissionPriority: [],
        }))
    }

    ngOnDestroy(): void {
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }
    submit() {

    }
}
