import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class RentalBase {

//#region rentalId Prop
        @prop()
        rentalId : number;
//#endregion rentalId Prop


//#region rentalCity Prop
        @required()
        @maxLength({value:50})
        rentalCity : string;
//#endregion rentalCity Prop


//#region rentalType Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rentalType : number;
//#endregion rentalType Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region isVerfied Prop
        @prop()
        isVerfied : boolean;
//#endregion isVerfied Prop









}