import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRentalRecordBase {

  @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'userId', keyColumn: true})
        userId : number;

//#region rentalCity Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'rentalCity', keyColumn: false})
        rentalCity : string;
//#endregion rentalCity Prop


//#region rentalType Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'rentalType', keyColumn: true})
        rentalType : number;
//#endregion rentalType Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region email Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'email', keyColumn: false})
        email : string;
//#endregion email Prop


//#region mobileNumber Prop
@gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'mobileNumber', keyColumn: false})
mobileNumber : number;
//#endregion mobileNumber Prop

@gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'rentalId', keyColumn: true})
rentalId : number;










}
