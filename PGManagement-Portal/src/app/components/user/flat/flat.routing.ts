import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatListComponent } from './list/flat-list.component';
import { FlatAddComponent } from './add/flat-add.component';
import { FlatEditComponent } from './edit/flat-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FlatListComponent
    },
    {
        path: 'add',
        component: FlatAddComponent
    },
    {
        path: ':id',
        component:  FlatEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
