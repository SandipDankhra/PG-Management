import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { clientReviewListComponent } from './list/client-review-list.component';


const ROUTES: Routes = [
    {
        path: '',
        component: clientReviewListComponent
    },
   
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
