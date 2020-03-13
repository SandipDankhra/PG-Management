import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vBedBase {

//#region flatId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'flatId', keyColumn: true})
        flatId : number;
//#endregion flatId Prop


//#region flatNumber Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'flatNumber', keyColumn: false})
        flatNumber : string;
//#endregion flatNumber Prop


//#region roomId Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'roomId', keyColumn: false})
        roomId : number;
//#endregion roomId Prop


//#region roomNumber Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'roomNumber', keyColumn: false})
        roomNumber : string;
//#endregion roomNumber Prop


//#region bedId Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'bedId', keyColumn: false})
        bedId : number;
//#endregion bedId Prop


//#region bedNumber Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'bedNumber', keyColumn: false})
        bedNumber : number;
//#endregion bedNumber Prop


//#region bedStatus Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'bedStatus', keyColumn: false})
        bedStatus : boolean;
//#endregion bedStatus Prop


//#region bedPrice Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'bedPrice', keyColumn: false})
        bedPrice : number;
//#endregion bedPrice Prop


//#region flatName Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'flatName', keyColumn: false})
        flatName : string;
//#endregion flatName Prop

}