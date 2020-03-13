import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Requester } from '@app/models';

@http({
    hostKey: "server",
    path: "api/vRequester",
})
export class AbstractRequester extends RxHttp {
    requesterFormGroup: IFormGroup<Requester>
}
