import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vEmployeeBase {

//#region firstName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region salary Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'salary', keyColumn: true})
        salary : number;
//#endregion salary Prop


//#region joinDate Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'joinDate', keyColumn: false})
        joinDate : any;
//#endregion joinDate Prop


//#region roleName Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'roleName', keyColumn: false})
        roleName : string;
//#endregion roleName Prop


//#region email Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'email', keyColumn: false})
        email : string;
//#endregion email Prop


//#region canLogin Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'canLogin', keyColumn: false})
        canLogin : any;
//#endregion canLogin Prop


//#region mobileNumber Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'mobileNumber', keyColumn: false})
        mobileNumber : any;
//#endregion mobileNumber Prop

}