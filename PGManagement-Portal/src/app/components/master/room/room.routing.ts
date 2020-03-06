import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomListComponent } from './list/room-list.component';
import { RoomAddComponent } from './add/room-add.component';
import { RoomEditComponent } from './edit/room-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: RoomListComponent
    },
    {
        path: 'add/:id',
        component: RoomAddComponent
    },
 
    {
        path: ':id',
        component: RoomEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
