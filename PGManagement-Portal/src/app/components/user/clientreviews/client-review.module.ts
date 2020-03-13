import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './client-review.routing'

import { clientReviewListComponent } from './list/client-review-list.component'

import { ReviewSharedModule } from './review-shared.module';
import { ClientHeaderModule } from '../clientheader/clientheader.module';
import { ClientFooterModule } from '../clientfooter/clientfooter.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ReviewSharedModule,ClientHeaderModule,ClientFooterModule,
        ROUTING
    ],
    declarations: [clientReviewListComponent],
    exports: [RouterModule],
    providers: []
})
export class clientreviewModule { }


