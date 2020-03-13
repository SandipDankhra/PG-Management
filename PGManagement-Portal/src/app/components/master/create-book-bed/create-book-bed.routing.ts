import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBookBedListComponent } from './list/create-book-bed-list.component';
import { CreateBookBedAddComponent } from './add/create-book-bed-add.component';
import { CreateBookBedEditComponent } from './edit/create-book-bed-edit.component';

import {vInvoiceRecordAddComponent} from '../v-invoice-record/add/v-invoice-record-add.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CreateBookBedListComponent
    },
    {
        path: 'add/:id',
        component: CreateBookBedAddComponent
    },
    {
        path: 'add/:userId/:bedId',
        component: CreateBookBedAddComponent
    },
    {
        path: ':id',
        component:  CreateBookBedEditComponent
    },
    {
        path: ' :id',
        component:  vInvoiceRecordAddComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
