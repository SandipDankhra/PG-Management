import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatListComponent } from './list/flat-list.component';
import { FlatAddComponent } from './add/flat-add.component';
import { FlatEditComponent } from './edit/flat-edit.component';
import {RoomAddComponent} from '../room/add/room-add.component'

const ROUTES: Routes = [
    {
        path: '',
        component: FlatListComponent
    },
    {
        path: 'add',
        component: FlatAddComponent
    },
    {
        path: ':id',
        component:  FlatEditComponent
    },
    // {
    //     path:'room/add:id',
    //     component: RoomAddComponent
    // }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
