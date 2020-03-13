import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestrictInputDirective } from 'src/app/domain/custom-directives/restrict-input';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './employee.routing'
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { EmployeeListComponent } from './list/employee-list.component'
import { EmployeeEditComponent } from './edit/employee-edit.component';
import { EmployeeAddComponent } from './add/employee-add.component';
import { EmployeeSharedModule } from './employee-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,EmployeeSharedModule,
        ROUTING,Ng2SearchPipeModule
    ],
    declarations: [EmployeeListComponent,EmployeeEditComponent,EmployeeAddComponent,],
    exports: [RouterModule],
    providers: []
})
export class EmployeeModule { }


