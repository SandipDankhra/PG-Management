import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { web.config } from '@app/models';

export class Abstractweb.config extends RxHttp {
    web.configFormGroup: IFormGroup<web.config>
}
