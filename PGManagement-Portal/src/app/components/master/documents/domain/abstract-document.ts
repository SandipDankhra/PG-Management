import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Document } from '@app/models';

export class AbstractDocument extends RxHttp {
    documentFormGroup: IFormGroup<Document>
}
