import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBookBedListComponent } from './list/create-book-bed-list.component';
import { CreateBookBedAddComponent } from './add/create-book-bed-add.component';
import { CreateBookBedEditComponent } from './edit/create-book-bed-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CreateBookBedListComponent
    },
    {
        path: 'add',
        component: CreateBookBedAddComponent
    },
    {
        path: ':id',
        component:  CreateBookBedEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
