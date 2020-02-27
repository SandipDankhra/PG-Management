import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ExpensBase {

//#region expenseId Prop
        @prop()
        expenseId : number;
//#endregion expenseId Prop


//#region expenseType Prop
        @required()
        @maxLength({value:50})
        expenseType : string;
//#endregion expenseType Prop


//#region expenseAmount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        expenseAmount : number;
//#endregion expenseAmount Prop


//#region expenseDetails Prop
        @required()
        expenseDetails : string;
//#endregion expenseDetails Prop


//#region exapenseDate Prop
        @required()
        exapenseDate : Date;
//#endregion exapenseDate Prop


//#region employeeId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        employeeId : number;
//#endregion employeeId Prop



}