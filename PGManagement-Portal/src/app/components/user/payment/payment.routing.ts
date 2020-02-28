import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentListComponent } from './list/payment-list.component';
import { PaymentAddComponent } from './add/payment-add.component';
import { PaymentEditComponent } from './edit/payment-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PaymentListComponent
    },
    {
        path: 'add',
        component: PaymentAddComponent
    },
    {
        path: ':id',
        component:  PaymentEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
