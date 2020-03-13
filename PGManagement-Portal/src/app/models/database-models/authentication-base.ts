import { prop, propObject, propArray, required, maxLength, range, numeric, password } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AuthenticationBase {

        @maxLength({ value: 132 })
       
	@password({validation:{maxLength: 20,minLength: 8,digit: true,specialCharacter: true} }) 
        userPassword:string;

        @prop()
        @required()
        @numeric()
        @range({ minimumNumber: 1000000000, maximumNumber: 9999999999 })
        mobileNumber: number
        //#region authenticationId Prop
        @prop()
        authenticationId: number;
        //#endregion authenticationId Prop


        //#region userId Prop
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        @required()
        userId: number;
        //#endregion userId Prop


        //#region otp Prop


        @required()
        @numeric()
        @range({ minimumNumber: 1000, maximumNumber: 9999 })
        otp: number;
        //#endregion otp Prop


        //#region generatedDateTime Prop
        @required()
        generatedDateTime: any;
        //#endregion generatedDateTime Prop


        //#region expiryDateTime Prop
        @required()
        expiryDateTime: any;
        //#endregion expiryDateTime Prop



}