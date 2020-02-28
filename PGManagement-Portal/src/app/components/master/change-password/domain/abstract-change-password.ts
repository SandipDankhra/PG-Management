import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChangePassword } from '@app/models';

export class AbstractChangePassword extends RxHttp {
    changePasswordFormGroup: IFormGroup<ChangePassword>
}
