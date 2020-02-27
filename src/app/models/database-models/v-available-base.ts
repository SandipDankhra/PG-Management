import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vAvailableBase {

//#region bedId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'bedId', keyColumn: true})
        bedId : number;
//#endregion bedId Prop


//#region bedStatus Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'bedStatus', keyColumn: false})
        bedStatus : boolean;
//#endregion bedStatus Prop

}