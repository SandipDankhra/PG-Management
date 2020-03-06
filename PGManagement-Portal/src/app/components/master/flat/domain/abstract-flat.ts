import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FlatBase } from "../../../../models/database-models/flat-base";


@http({
    hostKey:'server',
    path:'api/Flat'
})
export class AbstractFlat extends RxHttp {
    flatFormGroup: IFormGroup<FlatBase>
}
