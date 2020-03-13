import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalListComponent } from './list/rental-list.component';
import { RentalAddComponent } from './add/rental-add.component';
import { RentalEditComponent } from './edit/rental-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: RentalListComponent
    },
    {
        path: 'add',
        component: RentalAddComponent
    },
    {
        path: ':id',
        component:  RentalEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
