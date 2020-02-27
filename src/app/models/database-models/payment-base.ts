import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaymentBase {

//#region paymentId Prop
        @prop()
        paymentId : number;
//#endregion paymentId Prop


//#region paymentTypeId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentTypeId : number;
//#endregion paymentTypeId Prop


//#region paymentAmount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentAmount : number;
//#endregion paymentAmount Prop



}