import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './web-.config.routing'

import { web.configListComponent } from './list/web-.config-list.component'
import { web.configEditComponent } from './edit/web-.config-edit.component';
import { web.configAddComponent } from './add/web-.config-add.component';
import { web.configSharedModule } from './web-.config-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,web.configSharedModule,
        ROUTING
    ],
    declarations: [web.configListComponent,web.configEditComponent,web.configAddComponent],
    exports: [RouterModule],
    providers: []
})
export class web.configModule { }


