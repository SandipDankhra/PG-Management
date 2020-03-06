import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPasswordListComponent } from './list/forget-password-list.component';
import { ForgetPasswordAddComponent } from './add/forget-password-add.component';
import { ForgetPasswordEditComponent } from './edit/forget-password-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ForgetPasswordAddComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
