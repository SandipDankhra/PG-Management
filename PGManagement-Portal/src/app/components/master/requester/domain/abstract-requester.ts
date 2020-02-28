import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Requester } from '@app/models';

export class AbstractRequester extends RxHttp {
    requesterFormGroup: IFormGroup<Requester>
}
