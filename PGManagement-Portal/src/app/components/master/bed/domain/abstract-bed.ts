import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Bed } from '@app/models';

export class AbstractBed extends RxHttp {
    bedFormGroup: IFormGroup<Bed>
}
