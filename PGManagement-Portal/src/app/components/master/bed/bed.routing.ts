import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedListComponent } from './list/bed-list.component';
import { BedAddComponent } from './add/bed-add.component';
import { BedEditComponent } from './edit/bed-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: BedListComponent
    },
    {
        path: 'add/:id',
        component: BedAddComponent
    },
    {
        path: ':id',
        component:  BedEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
