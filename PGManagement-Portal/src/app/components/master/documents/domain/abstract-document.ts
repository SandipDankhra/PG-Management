import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Document } from '@app/models';

@http({
    hostKey: "server",
    path: "api/Documents",
})
export class AbstractDocument extends RxHttp {
    documentFormGroup: IFormGroup<Document>
}
