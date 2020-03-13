import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequesterListComponent } from './list/requester-list.component';
import { RequesterAddComponent } from './add/requester-add.component';
import { RequesterEditComponent } from './edit/requester-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: RequesterListComponent
    },
    {
        path: 'add/:id',
        component: RequesterAddComponent
    },
    {
        path: ':id',
        component:  RequesterEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
