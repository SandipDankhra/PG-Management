import {AuthenticationBase} from '../database-models/authentication-base';
import {UserBase} from '../database-models/user-base';
import { required, password, numeric, NumericValueType } from '@rxweb/reactive-form-validators';
//Generated Imports
export class Authentication extends AuthenticationBase 
{
    @required()
    @password({ validation: { maxLength: 20, minLength: 8, digit: true, specialCharacter: true } })
    userPassword:string;

    @required()
    @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
    // @range({minimumNumber:1000000000  ,maximumNumber:9999999999 }) 
    mobileNumber:number;

//#region Generated Reference Properties
//#region user Prop
user : UserBase;
//#endregion user Prop

//#endregion Generated Reference Properties






}