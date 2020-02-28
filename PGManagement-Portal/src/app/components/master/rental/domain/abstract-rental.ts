import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Rental } from '@app/models';

export class AbstractRental extends RxHttp {
    rentalFormGroup: IFormGroup<Rental>
}
