import { prop,propObject,propArray,required,maxLength,range ,numeric } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BedBase {

//#region bedId Prop
        @prop()
        bedId : number;
//#endregion bedId Prop


//#region roomId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        roomId : number;
//#endregion roomId Prop


//#region bedNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        @numeric()
        bedNumber : number;
//#endregion bedNumber Prop


//#region bedStatus Prop
        @required()
        bedStatus : boolean;
//#endregion bedStatus Prop


//#region bedPrice Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        @numeric()
        bedPrice : number;
//#endregion bedPrice Prop


//#region softDelete Prop
        @prop()
        softDelete : boolean;
//#endregion softDelete Prop





}