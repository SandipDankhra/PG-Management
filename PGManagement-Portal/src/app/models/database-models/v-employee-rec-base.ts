import { prop,propObject,propArray,required,maxLength,range ,numeric,alpha,mask,email, NumericValueType } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vEmployeeRecBase {

//#region salary Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'salary', keyColumn: true})
        @numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:true })
        salary : number;
//#endregion salary Prop


//#region joinDate Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'joinDate', keyColumn: false})
        joinDate : any;
//#endregion joinDate Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        @alpha()
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        @alpha()
        lastName : string;
//#endregion lastName Prop


//#region mobileNumber Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'mobileNumber', keyColumn: false})
        @numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false })
        @mask({mask:'(999)-999 9999' })
        mobileNumber : number;
//#endregion mobileNumber Prop


//#region email Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'email', keyColumn: false})
        @email()
        email : string;
//#endregion email Prop


//#region statusId Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'statusId', keyColumn: false})
        statusId : any;
//#endregion statusId Prop


//#region loginBlocked Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'loginBlocked', keyColumn: false})
        loginBlocked : any;
//#endregion loginBlocked Prop


//#region employeeId Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'employeeId', keyColumn: false})
        employeeId : number;
//#endregion employeeId Prop


//#region userId Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'userId', keyColumn: false})
        userId : number;
//#endregion userId Prop

}