import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Employee } from '@app/models';

export class AbstractEmployee extends RxHttp {
    employeeFormGroup: IFormGroup<Employee>
}
