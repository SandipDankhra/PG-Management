import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Room } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


@http({
    hostKey: 'server',
    path: 'api/Room'
})

export class AbstractRoom extends RxHttp {


    roomFormGroup: IFormGroup<Room>
}
