import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './requester.routing'

import { RequesterListComponent } from './list/requester-list.component'
import { RequesterEditComponent } from './edit/requester-edit.component';
import { RequesterAddComponent } from './add/requester-add.component';
import { RequesterSharedModule } from './requester-shared.module';
import { ClientHeaderModule } from '../../user/clientheader/clientheader.module';
import { ClientFooterModule } from '../../user/clientfooter/clientfooter.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RequesterSharedModule,ClientHeaderModule,ClientFooterModule,
        ROUTING
    ],
    declarations: [RequesterListComponent,RequesterEditComponent,RequesterAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RequesterModule { }


