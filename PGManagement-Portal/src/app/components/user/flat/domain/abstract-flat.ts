import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Flat } from '@app/models';

export class AbstractFlat extends RxHttp {
    flatFormGroup: IFormGroup<Flat>
}
