import { prop,propObject,propArray,required,maxLength,range ,numeric } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AuthenticationBase {

//#region authenticationId Prop
        @prop()
        authenticationId : number;
//#endregion authenticationId Prop


//#region userId Prop
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        @required()
        userId : number;
//#endregion userId Prop


//#region otp Prop
        @range({ minimumNumber: 1000, maximumNumber: 9999 })
        @required()
        @numeric()
        otp : number;
//#endregion otp Prop


//#region generatedDateTime Prop
        @required()
        generatedDateTime : any;
//#endregion generatedDateTime Prop


//#region expiryDateTime Prop
        @required()
        expiryDateTime : any;
//#endregion expiryDateTime Prop



}