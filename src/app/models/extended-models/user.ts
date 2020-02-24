import {UserBase} from '../database-models/user-base';
import {RentalBase} from '../database-models/rental-base';
import {ApplicationUserTokenBase} from '../database-models/application-user-token-base';
import {UserRoleBase} from '../database-models/user-role-base';
import {EmployeeBase} from '../database-models/employee-base';
import {DocumentBase} from '../database-models/document-base';
import {RequesterBase} from '../database-models/requester-base';
//Generated Imports
export class User extends UserBase 
{




//#region Generated Reference Properties
//#region rentals Prop
rentals : RentalBase[];
//#endregion rentals Prop
//#region applicationUserTokens Prop
applicationUserTokens : ApplicationUserTokenBase[];
//#endregion applicationUserTokens Prop
//#region userRoles Prop
userRoles : UserRoleBase[];
//#endregion userRoles Prop
//#region employees Prop
employees : EmployeeBase[];
//#endregion employees Prop
//#region documents Prop
documents : DocumentBase[];
//#endregion documents Prop
//#region requesters Prop
requesters : RequesterBase[];
//#endregion requesters Prop

//#endregion Generated Reference Properties




}