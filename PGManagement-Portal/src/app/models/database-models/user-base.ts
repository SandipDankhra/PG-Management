import {
  prop,
  propObject,
  propArray,
  required,
  maxLength,
  range,
  alpha,
  numeric,
  email,
  password,
  NumericValueType
} from "@rxweb/reactive-form-validators";
import { gridColumn } from "@rxweb/grid";

export class UserBase {
  //#region userId Prop
  @prop()
  userId: number;
  //#endregion userId Prop

  //#region firstName Prop
  @required()
  @maxLength({ value: 50 })
  @alpha()
  firstName: string;
  //#endregion firstName Prop

  //#region lastName Prop
  @required()
  @maxLength({ value: 50 })
  @alpha()
  lastName: string;
  //#endregion lastName Prop

  //#region mobileNumber Prop
  @required()
  @numeric({
    acceptValue: NumericValueType.PositiveNumber,
    allowDecimal: false
  })
  mobileNumber: number;
  //#endregion mobileNumber Prop

  //#region email Prop
  @required()
  @maxLength({ value: 50 })
  @email()
  email: string;
  //#endregion email Prop

  //#region applicationLocaleId Prop
  @prop()
  applicationLocaleId: number;
  //#endregion applicationLocaleId Prop

  //#region applicationTimeZoneId Prop
  @prop()
  applicationTimeZoneId: number;
  //#endregion applicationTimeZoneId Prop

  //#region languageCode Prop
  @maxLength({ value: 3 })
  languageCode: string;
  //#endregion languageCode Prop

  //#region password Prop
  @required()
  @password({
    validation: {
      maxLength: 20,
      minLength: 8,
      digit: true,
      specialCharacter: true
    }
  })
  userPassword: any;
  @maxLength({ value: 132 })
  password: any;
  //#endregion password Prop

  //#region salt Prop
  //  @required()
  @maxLength({ value: 140 })
  salt: any;
  //#endregion salt Prop

  //#region loginBlocked Prop
  @prop()
  loginBlocked: boolean;
  //#endregion loginBlocked Prop

  //#region statusId Prop
  @prop({ defaultValue: 1 })
  statusId: number;
  //#endregion statusId Prop
}
