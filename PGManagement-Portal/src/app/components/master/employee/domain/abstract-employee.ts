import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vEmployeeRecord, vEmployeeRec } from '@app/models';
import { vEmployee } from '@app/models';
import { CreateEmployee } from '@app/custom-models';
import { anonymous } from '@rxweb/angular-router';


@http({
    hostKey: 'server',
    path: "api/Employees"
})

export class AbstractEmployee extends RxHttp {
    employeeFormGroup: IFormGroup<vEmployeeRec>
    createEmployeeFormGroup: IFormGroup<CreateEmployee>
}
