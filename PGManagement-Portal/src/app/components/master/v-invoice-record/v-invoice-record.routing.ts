import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vInvoiceRecordListComponent } from './list/v-invoice-record-list.component';
import { vInvoiceRecordAddComponent } from './add/v-invoice-record-add.component';
import { vInvoiceRecordEditComponent } from './edit/v-invoice-record-edit.component';

const ROUTES: Routes = [
    {
        path: 'zxcbz',
        component: vInvoiceRecordListComponent
    },
    {
        path: 'zcxvadd',
        component: vInvoiceRecordAddComponent
    },
    {
        path: ':id',
        component:  vInvoiceRecordEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
