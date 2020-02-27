import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AuthBase {

//#region authId Prop
        @prop()
        authId : number;
//#endregion authId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region authOtp Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        authOtp : number;
//#endregion authOtp Prop


//#region currentDateTime Prop
        @required()
        currentDateTime : any;
//#endregion currentDateTime Prop


//#region expiryDateTime Prop
        @required()
        expiryDateTime : any;
//#endregion expiryDateTime Prop



}