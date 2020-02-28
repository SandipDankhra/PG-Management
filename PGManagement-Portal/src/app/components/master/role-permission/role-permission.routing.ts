import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolePermissionListComponent } from './list/role-permission-list.component';
import { RolePermissionAddComponent } from './add/role-permission-add.component';
import { RolePermissionEditComponent } from './edit/role-permission-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: RolePermissionListComponent
    },
    {
        path: 'add',
        component: RolePermissionAddComponent
    },
    {
        path: ':id',
        component:  RolePermissionEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
