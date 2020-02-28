import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { web.configListComponent } from './list/web-.config-list.component';
import { web.configAddComponent } from './add/web-.config-add.component';
import { web.configEditComponent } from './edit/web-.config-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: web.configListComponent
    },
    {
        path: 'add',
        component: web.configAddComponent
    },
    {
        path: ':id',
        component:  web.configEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
