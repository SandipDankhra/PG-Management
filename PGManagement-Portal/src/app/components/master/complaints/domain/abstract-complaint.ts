import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Complaint } from '@app/models';

export class AbstractComplaint extends RxHttp {
    complaintFormGroup: IFormGroup<Complaint>
}
