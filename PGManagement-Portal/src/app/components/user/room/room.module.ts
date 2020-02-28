import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './room.routing'

import { RoomListComponent } from './list/room-list.component'
import { RoomEditComponent } from './edit/room-edit.component';
import { RoomAddComponent } from './add/room-add.component';
import { RoomSharedModule } from './room-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RoomSharedModule,
        ROUTING
    ],
    declarations: [RoomListComponent,RoomEditComponent,RoomAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RoomModule { }


