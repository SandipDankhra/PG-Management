import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vInvoiceRecord } from '@app/models';

export class AbstractvInvoiceRecord extends RxHttp {
    vInvoiceRecordFormGroup: IFormGroup<vInvoiceRecord>
}
