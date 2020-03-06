import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vEmployeeRecBase {

//#region salary Prop
        @prop()
        salary : number;
//#endregion salary Prop


//#region joinDate Prop
@prop()
        joinDate : any;
//#endregion joinDate Prop


//#region firstName Prop
@prop()
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
@prop()
        lastName : string;
//#endregion lastName Prop


//#region mobileNumber Prop
@prop()
        mobileNumber : number;
//#endregion mobileNumber Prop


//#region email Prop
@prop()
        email : string;
//#endregion email Prop


//#region statusId Prop
@prop()
        statusId : number;
//#endregion statusId Prop


//#region loginBlocked Prop
@prop()
        loginBlocked : boolean;
//#endregion loginBlocked Prop


//#region employeeId Prop
@prop()
        employeeId : number;
//#endregion employeeId Prop


//#region userId Prop
@prop()
        userId : number;
//#endregion userId Prop

}