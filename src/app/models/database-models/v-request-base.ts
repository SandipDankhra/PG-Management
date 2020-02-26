import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRequestBase {

//#region locality Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'locality', keyColumn: false})
        locality : string;
//#endregion locality Prop


//#region flatNumber Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'flatNumber', keyColumn: false})
        flatNumber : string;
//#endregion flatNumber Prop


//#region roomType Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'roomType', keyColumn: true})
        roomType : number;
//#endregion roomType Prop


//#region roomSharing Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'roomSharing', keyColumn: false})
        roomSharing : string;
//#endregion roomSharing Prop


//#region bedId Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'bedId', keyColumn: false})
        bedId : number;
//#endregion bedId Prop


//#region bedStatus Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'bedStatus', keyColumn: false})
        bedStatus : boolean;
//#endregion bedStatus Prop

}