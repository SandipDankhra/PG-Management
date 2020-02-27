import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vAvailableBedBase {

//#region flatName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'flatName', keyColumn: false})
        flatName : string;
//#endregion flatName Prop


//#region address Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'address', keyColumn: false})
        address : string;
//#endregion address Prop


//#region locality Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'locality', keyColumn: false})
        locality : string;
//#endregion locality Prop


//#region roomId Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'roomId', keyColumn: false})
        roomId : number;
//#endregion roomId Prop


//#region roomNumber Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'roomNumber', keyColumn: false})
        roomNumber : string;
//#endregion roomNumber Prop


//#region roomType Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'roomType', keyColumn: false})
        roomType : number;
//#endregion roomType Prop


//#region roomSharing Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'roomSharing', keyColumn: false})
        roomSharing : string;
//#endregion roomSharing Prop


//#region bedId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'bedId', keyColumn: true})
        bedId : number;
//#endregion bedId Prop


//#region bedStatus Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'bedStatus', keyColumn: false})
        bedStatus : boolean;
//#endregion bedStatus Prop


//#region bedPrice Prop
        @gridColumn({visible: true, columnIndex:14, allowSorting: true, headerKey: 'bedPrice', keyColumn: false})
        bedPrice : number;
//#endregion bedPrice Prop


//#region flatId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'flatId', keyColumn: true})
        flatId : number;
//#endregion flatId Prop


//#region flatNumber Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'flatNumber', keyColumn: false})
        flatNumber : string;
//#endregion flatNumber Prop


//#region bedNumber Prop
        @gridColumn({visible: true, columnIndex:13, allowSorting: true, headerKey: 'bedNumber', keyColumn: false})
        bedNumber : number;
//#endregion bedNumber Prop

}