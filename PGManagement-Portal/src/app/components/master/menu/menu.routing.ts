import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuListComponent } from './list/menu-list.component';
import { MenuAddComponent } from './add/menu-add.component';
import { MenuEditComponent } from './edit/menu-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MenuListComponent
    },
    {
        path: 'add',
        component: MenuAddComponent
    },
    {
        path: ':id',
        component:  MenuEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
