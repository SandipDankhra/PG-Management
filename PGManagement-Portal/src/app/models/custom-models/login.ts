import { prop, propObject, propArray, required, maxLength, range } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"
export class login {

    //#region userId Prop
    @required()
    email:string ;
    //#endregion userId Prop
    //#region password Prop
    @required()
    password: string;
    //#endregion password Prop

}