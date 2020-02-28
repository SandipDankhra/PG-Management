import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ForgetPassword } from '@app/models';

export class AbstractForgetPassword extends RxHttp {
    forgetPasswordFormGroup: IFormGroup<ForgetPassword>
}
