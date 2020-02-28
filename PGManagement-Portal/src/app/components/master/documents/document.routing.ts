import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentListComponent } from './list/document-list.component';
import { DocumentAddComponent } from './add/document-add.component';
import { DocumentEditComponent } from './edit/document-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: DocumentListComponent
    },
    {
        path: 'add',
        component: DocumentAddComponent
    },
    {
        path: ':id',
        component:  DocumentEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
