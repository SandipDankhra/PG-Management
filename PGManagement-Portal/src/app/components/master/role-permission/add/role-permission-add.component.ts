import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup, RxFormGroup } from '@rxweb/reactive-form-validators';

import { RolePermission, ApplicationModule, ApplicationObject } from '@app/models';
import { AbstractRolePermission } from '../domain/abstract-role-permission';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
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

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.get({ path: 'api/ApplicatioModuleLookup/ApplicationModuleLookups' }).subscribe((t: List<ApplicationModule>) => {
            this.applicationModules = t;

            for (var applicationModule of this.applicationModules) {
                this.addFormGroup(applicationModule);
            }
        })
        this.rolePermission = new RolePermission();
        this.roleFormGroup = this.formBuilder.group({
            permission: new FormArray([])
        });
        this.permissionFormArray = this.roleFormGroup.controls.permission as FormArray;

    }
    addFormGroup(applicationModule: ApplicationModule) {
        console.log(applicationModule);
        this.permissionFormArray.push(this.formBuilder.group({
            RoleId: ['1'],
            ApplicationModuleId: [applicationModule.applicationModuleId],
            CanView: [],
            CanAdd: [],
            CanEdit: [],
            CanDelete: [],
            PermissionPriority: [],
        }))
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    submit() {
        console.log(JSON.parse(JSON.stringify(this.roleFormGroup.controls.permission.value)));
        let jsonstring = JSON.parse(JSON.stringify(this.roleFormGroup.controls.permission.value))
        console.log(jsonstring);
        this.post({ body: { rolePermissions: jsonstring } }).subscribe(t => { console.log(t) })
    }
}