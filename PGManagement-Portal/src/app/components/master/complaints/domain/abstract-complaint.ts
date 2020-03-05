import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Complaint } from '@app/models';
import { anonymous, CoreComponent } from '@rxweb/angular-router';

@http({
    hostKey: 'server',
    path: 'api/complaints'
})
export class AbstractComplaint extends CoreComponent {
    complaintFormGroup: IFormGroup<Complaint>
}
