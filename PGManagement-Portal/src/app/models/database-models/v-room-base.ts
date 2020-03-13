import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRoomBase {

//#region flatId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'flatId', keyColumn: true})
        flatId : number;
//#endregion flatId Prop
        @prop()
        roomId:number;
//#region flatNumber Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'flatNumber', keyColumn: false})
        flatNumber : string;
//#endregion flatNumber Prop


//#region roomNumber Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'roomNumber', keyColumn: false})
        roomNumber : string;
//#endregion roomNumber Prop


//#region roomSharing Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'roomSharing', keyColumn: false})
        roomSharing : string;
//#endregion roomSharing Prop


//#region roomType Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'roomType', keyColumn: false})
        roomType : number;
//#endregion roomType Prop


//#region flatName Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'flatName', keyColumn: false})
        flatName : string;
//#endregion flatName Prop


//#region locality Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'locality', keyColumn: false})
        locality : string;
//#endregion locality Prop

}