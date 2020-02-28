import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './list/employee-list.component';
import { EmployeeAddComponent } from './add/employee-add.component';
import { EmployeeEditComponent } from './edit/employee-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    },
    {
        path: 'add',
        component: EmployeeAddComponent
    },
    {
        path: ':id',
        component:  EmployeeEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
