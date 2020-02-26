import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vExpensBase {

//#region userId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'userId', keyColumn: true})
        userId : number;
//#endregion userId Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region expenseAmount Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'expenseAmount', keyColumn: false})
        expenseAmount : number;
//#endregion expenseAmount Prop


//#region expenseType Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'expenseType', keyColumn: false})
        expenseType : string;
//#endregion expenseType Prop


//#region expenseDetails Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'expenseDetails', keyColumn: false})
        expenseDetails : string;
//#endregion expenseDetails Prop


//#region exapenseDate Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'exapenseDate', keyColumn: false})
        exapenseDate : any;
//#endregion exapenseDate Prop


//#region mobileNumber Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'mobileNumber', keyColumn: false})
        mobileNumber : any;
//#endregion mobileNumber Prop

}