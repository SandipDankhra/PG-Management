import { prop, propObject, propArray, required, maxLength, range, password, email } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"
export class login {

    //#region userId Prop
    @required()
    // @email()
    email:string ;
    //#endregion userId Prop
    @required()
    // @maxLength({ value: 132 })
  //  @password({ validation: { maxLength: 20, minLength: 8, digit: true, specialCharacter: true } })
    password: any;
    //#endregion password Prop

    // @required()
  //  @password({ validation: { maxLength: 20, minLength: 8, digit: true, specialCharacter: true } })
    // userPassword: string;

}
