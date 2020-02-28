import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { User } from '@app/models';

export class AbstractRegistration extends RxHttp {
    registrationFormGroup: IFormGroup<User>
}
