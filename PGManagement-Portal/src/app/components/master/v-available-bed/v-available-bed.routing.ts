import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vAvailableBedListComponent } from './list/v-available-bed-list.component';
import { vAvailableBedAddComponent } from './add/v-available-bed-add.component';
import { vAvailableBedEditComponent } from './edit/v-available-bed-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vAvailableBedListComponent
    },
    {
        path: 'add',
        component: vAvailableBedAddComponent
    },
    {
        path: ':id',
        component:  vAvailableBedEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
