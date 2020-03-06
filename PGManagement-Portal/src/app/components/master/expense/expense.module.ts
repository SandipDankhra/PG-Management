import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './expense.routing'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExpenseListComponent } from './list/expense-list.component'
import { ExpenseEditComponent } from './edit/expense-edit.component';
import { ExpenseAddComponent } from './add/expense-add.component';
import { ExpenseSharedModule } from './expense-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ExpenseSharedModule,
        ROUTING,Ng2SearchPipeModule
    ],
    declarations: [ExpenseListComponent,ExpenseEditComponent,ExpenseAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ExpenseModule { }


