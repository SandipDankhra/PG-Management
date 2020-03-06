import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Bed } from '@app/models';


@http({
    hostKey:'server',
    path:'api/Bed'
})

export class AbstractBed extends RxHttp {
    bedFormGroup: IFormGroup<Bed>
}
