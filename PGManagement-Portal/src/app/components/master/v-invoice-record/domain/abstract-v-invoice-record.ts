import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vInvoiceRecord } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


@http({
    hostKey: 'server',
    path: 'api/vInvoiceRecord'
})
export class AbstractvInvoiceRecord extends RxHttp {
    vInvoiceRecordFormGroup: IFormGroup<vInvoiceRecord>
}
