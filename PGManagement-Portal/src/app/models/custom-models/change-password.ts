import { prop, propObject, propArray, required, maxLength, range } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"
export class ChangePassword {

    //#region userId Prop
    userId: number;
    //#endregion userId Prop
    //#region password Prop
    @required()
    @maxLength({ value: 132 })
    oldPassword: any;
    //#endregion password Prop


    //#region password Prop
    @required()
    @maxLength({ value: 132 })
    newPassword: any;
    //#endregion password Prop

}