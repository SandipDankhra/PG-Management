import { required } from '@rxweb/reactive-form-validators';

export class UserAuthentication {
    @required()
    mobileNumber: string;
    @required()
    userPassword: string;
}
