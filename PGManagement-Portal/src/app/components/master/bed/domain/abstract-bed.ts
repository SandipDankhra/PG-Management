import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Bed } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey: "server",
    path: "api/bed",
})

export class AbstractBed extends RxHttp {
    bedFormGroup: IFormGroup<Bed>
}
