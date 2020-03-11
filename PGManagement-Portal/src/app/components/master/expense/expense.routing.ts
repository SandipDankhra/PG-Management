import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseListComponent } from './list/expense-list.component';
import { ExpenseAddComponent } from './add/expense-add.component';
import { ExpenseEditComponent } from './edit/expense-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ExpenseListComponent
    },
    {
        path: 'add',
        component: ExpenseAddComponent
    },
    {
        path: ':id',
        component: ExpenseEditComponent
    },

];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
