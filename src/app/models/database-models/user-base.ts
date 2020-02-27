import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class UserBase {

//#region userId Prop
        @prop()
        userId : number;
//#endregion userId Prop


//#region firstName Prop
        @maxLength({value:50})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @maxLength({value:50})
        lastName : string;
//#endregion lastName Prop


//#region mobileNumber Prop
        @required()
        mobileNumber : number;
//#endregion mobileNumber Prop


//#region email Prop
        @maxLength({value:50})
        email : string;
//#endregion email Prop


//#region applicationLocaleId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        applicationLocaleId : number;
//#endregion applicationLocaleId Prop


//#region applicationTimeZoneId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        applicationTimeZoneId : number;
//#endregion applicationTimeZoneId Prop


//#region languageCode Prop
        @required()
        @maxLength({value:3})
        languageCode : string;
//#endregion languageCode Prop


//#region password Prop
        @required()
        @maxLength({value:132})
        password : any;
//#endregion password Prop


//#region salt Prop
        @required()
        @maxLength({value:140})
        salt : any;
//#endregion salt Prop


//#region loginBlocked Prop
        @required()
        loginBlocked : boolean;
//#endregion loginBlocked Prop


//#region statusId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        statusId : number;
//#endregion statusId Prop















}