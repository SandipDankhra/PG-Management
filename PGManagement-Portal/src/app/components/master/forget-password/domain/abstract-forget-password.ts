import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { User, Authentication } from '@app/models';

export class AbstractForgetPassword extends RxHttp {
    forgetPasswordFormGroup: IFormGroup<Authentication>
}
