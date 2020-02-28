import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './flat.routing'

import { FlatListComponent } from './list/flat-list.component'
import { FlatEditComponent } from './edit/flat-edit.component';
import { FlatAddComponent } from './add/flat-add.component';
import { FlatSharedModule } from './flat-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FlatSharedModule,
        ROUTING
    ],
    declarations: [FlatListComponent,FlatEditComponent,FlatAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FlatModule { }


