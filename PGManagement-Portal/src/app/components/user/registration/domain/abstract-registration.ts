import { RxHttp,http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { User } from '@app/models';


@http({
    hostKey: 'server',
    path: 'api/Registration',
})

export class AbstractRegistration extends RxHttp {
    registrationFormGroup: IFormGroup<User>
}
