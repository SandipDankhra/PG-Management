import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vAvailableBed } from '@app/models';

export class AbstractvAvailableBed extends RxHttp {
    vAvailableBedFormGroup: IFormGroup<vAvailableBed>
}
