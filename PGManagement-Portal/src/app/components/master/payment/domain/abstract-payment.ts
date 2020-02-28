import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Payment } from '@app/models';

export class AbstractPayment extends RxHttp {
    paymentFormGroup: IFormGroup<Payment>
}
