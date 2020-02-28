import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationListComponent } from './list/registration-list.component';
import { RegistrationAddComponent } from './add/registration-add.component';
import { RegistrationEditComponent } from './edit/registration-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: RegistrationListComponent
    },
    {
        path: 'add',
        component: RegistrationAddComponent
    },
    {
        path: ':id',
        component:  RegistrationEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
