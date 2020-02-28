import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './menu.routing'

import { MenuListComponent } from './list/menu-list.component'
import { MenuEditComponent } from './edit/menu-edit.component';
import { MenuAddComponent } from './add/menu-add.component';
import { MenuSharedModule } from './menu-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,MenuSharedModule,
        ROUTING
    ],
    declarations: [MenuListComponent,MenuEditComponent,MenuAddComponent],
    exports: [RouterModule],
    providers: []
})
export class MenuModule { }


