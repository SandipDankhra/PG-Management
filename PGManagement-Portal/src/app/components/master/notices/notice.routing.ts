import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeListComponent } from './list/notice-list.component';
import { NoticeAddComponent } from './add/notice-add.component';
import { NoticeEditComponent } from './edit/notice-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: NoticeListComponent
    },
    {
        path: 'add',
        component: NoticeAddComponent
    },
    {
        path: ':id',
        component:  NoticeEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
