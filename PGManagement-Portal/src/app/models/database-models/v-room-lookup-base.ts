import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRoomLookupBase {

//#region roomId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'roomId', keyColumn: true})
        roomId : number;
//#endregion roomId Prop


//#region flatId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'flatId', keyColumn: false})
        flatId : number;
//#endregion flatId Prop


//#region roomNumber Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'roomNumber', keyColumn: false})
        roomNumber : string;
//#endregion roomNumber Prop

}