import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FlatBase } from "../../../../models/database-models/flat-base";

export class AbstractFlat extends RxHttp {
    flatFormGroup: IFormGroup<FlatBase>
}
