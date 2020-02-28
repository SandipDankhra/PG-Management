import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintListComponent } from './list/complaint-list.component';
import { ComplaintAddComponent } from './add/complaint-add.component';
import { ComplaintEditComponent } from './edit/complaint-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ComplaintListComponent
    },
    {
        path: 'add',
        component: ComplaintAddComponent
    },
    {
        path: ':id',
        component:  ComplaintEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
