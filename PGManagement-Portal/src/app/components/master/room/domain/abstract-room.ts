import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Room } from '@app/models';

export class AbstractRoom extends RxHttp {
    roomFormGroup: IFormGroup<Room>
}
