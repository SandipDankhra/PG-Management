import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChangePassword } from '@app/custom-models';

export class AbstractChangePassword extends RxHttp {
    changePasswordFormGroup: IFormGroup<ChangePassword>
}
