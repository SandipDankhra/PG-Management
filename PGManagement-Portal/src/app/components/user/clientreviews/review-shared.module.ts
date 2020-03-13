import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule],
    declarations: [],
    providers: []
})
export class ReviewSharedModule { }

