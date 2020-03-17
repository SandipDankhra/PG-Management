import { prop,propObject,propArray,required,maxLength,range ,numeric,alpha,mask,email, NumericValueType } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vEmployeeRecBase {

//#region salary Prop
        @prop()
        @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: true })
        salary : number;
//#endregion salary Prop


//#region joinDate Prop
@prop()
        joinDate : any;
//#endregion joinDate Prop


//#region firstName Prop
@prop()
        @alpha()
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
@prop()
        @alpha()
        lastName : string;
//#endregion lastName Prop


//#region mobileNumber Prop
@prop()
        @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
        @mask({ mask: '(999)-999 9999' })
        mobileNumber : number;
//#endregion mobileNumber Prop


//#region email Prop
@prop()
        @email()
        email : string;
//#endregion email Prop


//#region statusId Prop
@prop()
        statusId : any;
//#endregion statusId Prop


//#region loginBlocked Prop
@prop()
        loginBlocked : any;
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