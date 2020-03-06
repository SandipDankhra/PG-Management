import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewListComponent } from './list/review-list.component';
import { ReviewAddComponent } from './add/review-add.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ReviewListComponent
    },
    {
        path: 'add',
        component: ReviewAddComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
