import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vAvailableBed } from '@app/models';

@http({
    hostKey:'server',
    path:'api/vAvailableBed'
})
export class AbstractvAvailableBed extends RxHttp {
    vAvailableBedFormGroup: IFormGroup<vAvailableBed>
}
