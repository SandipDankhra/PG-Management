import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { User, Authentication } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@anonymous()
@http({
    hostKey: 'server',
    path: 'api/ForgetPassword',
})
export class AbstractForgetPassword extends RxHttp {
    forgetPasswordFormGroup: IFormGroup<Authentication>
}
