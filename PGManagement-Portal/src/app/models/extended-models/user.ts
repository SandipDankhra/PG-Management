import { UserBase } from '../database-models/user-base';
import { RentalBase } from '../database-models/rental-base';
import { ApplicationUserTokenBase } from '../database-models/application-user-token-base';
import { UserRoleBase } from '../database-models/user-role-base';
import { AuthenticationBase } from '../database-models/authentication-base';
import { EmployeeBase } from '../database-models/employee-base';
import { DocumentBase } from '../database-models/document-base';
import { RequesterBase } from '../database-models/requester-base';
import { prop, async, RxFormGroup } from '@rxweb/reactive-form-validators';
import { FormControl, FormGroup } from '@angular/forms';

//Generated Imports
export class User extends UserBase {

    // @async([isPasswordValidate]) //^(?=.{8,16}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$
    confirmPassword: string;

    @prop()
    userPassword: any;
    //#region Generated Reference Properties
    //#region rentals Prop
    rentals: RentalBase[];
    //#endregion rentals Prop
    //#region applicationUserTokens Prop
    applicationUserTokens: ApplicationUserTokenBase[];
    //#endregion applicationUserTokens Prop
    //#region userRoles Prop
    userRoles: UserRoleBase[];
    //#endregion userRoles Prop
    //#region authentication Prop
    authentication: AuthenticationBase[];
    //#endregion authentication Prop
    //#region employees Prop
    employees: EmployeeBase[];
    //#endregion employees Prop
    //#region documents Prop
    documents: DocumentBase[];
    //#endregion documents Prop
    //#region requesters Prop
    requesters: RequesterBase[];
    //#endregion requesters Prop

    //#endregion Generated Reference Properties

}


// function isPasswordValidate(control: FormControl) {
//     // const userPassword: string = control.get('userPassword').value;
//     // const confirmPassword: string = control.get('confirmPassword').value;
//     console.log("hello");
//     const promise = new Promise((resolve, reject) => {
// 		if (control.value == 123)
// 			resolve(null)
// 		else
// 		resolve({ 'async':{message: 'Password must be matched'} })
// 	});
// 	return promise;

// }