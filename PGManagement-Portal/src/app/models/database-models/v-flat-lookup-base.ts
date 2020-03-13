import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vFlatLookupBase {

//#region flatId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'flatId', keyColumn: true})
        flatId : number;
//#endregion flatId Prop


//#region flatName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'flatName', keyColumn: false})
        flatName : string;
//#endregion flatName Prop

}