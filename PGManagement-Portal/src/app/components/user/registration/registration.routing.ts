import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistrationAddComponent } from './add/registration-add.component';
import { RegistrationEditComponent } from './edit/registration-edit.component';

const ROUTES: Routes = [
  
    {
        path: 'add',
        component: RegistrationAddComponent
    },
    {
        path: ':id',
        component:  RegistrationEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
