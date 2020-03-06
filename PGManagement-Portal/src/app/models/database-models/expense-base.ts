import { prop, propObject, propArray, required, maxLength, range, unique } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ExpenseBase {

        //#region expenseId Prop
        // @prop()
        expenseId: number;
        //#endregion expenseId Prop


        //#region expenseType Prop
        @required()
        @maxLength({ value: 50 })
        expenseType: string;
        //#endregion expenseType Prop


        //#region expenseAmount Prop
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        @required()
        expenseAmount: number;
        //#endregion expenseAmount Prop


        //#region expenseDetails Prop
        @required()
        expenseDetails: string;
        //#endregion expenseDetails Prop


        //#region expenseDate Prop
        @required()
        expenseDate: Date;
        //#endregion expenseDate Prop


        //#region employeeId Prop
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        // @required()
        @prop({defaultValue:1})//remove when token will store
        employeeId: number;
        //#endregion employeeId Prop



}