import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChangePassword } from '@app/custom-models';
@http({
    hostKey:'server',
    path:'api/ChangePassword',
})
export class AbstractChangePassword extends RxHttp {
    changePasswordFormGroup: IFormGroup<ChangePassword>
}
