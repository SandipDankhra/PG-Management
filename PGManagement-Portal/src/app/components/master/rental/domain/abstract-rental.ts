import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vRentalRecord } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey: 'server',
    path: 'api/Rental',
})
export class AbstractRental extends RxHttp {
    rentalFormGroup: IFormGroup<vRentalRecord>
}
