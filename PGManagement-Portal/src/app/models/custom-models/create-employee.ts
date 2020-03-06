import { prop, propObject, propArray, required, maxLength, range } from "@rxweb/reactive-form-validators"
export class CreateEmployee {

    @required()
    firstName:string;

    @required()
    lastName:string;

    @required()
    salary:number;

    @required()
    joinDate:Date;

    @required()
    email:string;

    @required()
    mobileNumber:number;

    @required()
    employeePassword:string;

    @required()
    loginBlocked:boolean;

}