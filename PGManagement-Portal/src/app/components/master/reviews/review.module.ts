import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './review.routing'

import { ReviewListComponent } from './list/review-list.component'
import { ReviewEditComponent } from './edit/review-edit.component';
import { ReviewAddComponent } from './add/review-add.component';
import { ReviewSharedModule } from './review-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ReviewSharedModule,
        ROUTING
    ],
    declarations: [ReviewListComponent,ReviewEditComponent,ReviewAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ReviewModule { }


