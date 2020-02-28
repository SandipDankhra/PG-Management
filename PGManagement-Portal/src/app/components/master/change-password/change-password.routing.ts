import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordListComponent } from './list/change-password-list.component';
import { ChangePasswordAddComponent } from './add/change-password-add.component';
import { ChangePasswordEditComponent } from './edit/change-password-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ChangePasswordListComponent
    },
    {
        path: 'add',
        component: ChangePasswordAddComponent
    },
    {
        path: ':id',
        component:  ChangePasswordEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
