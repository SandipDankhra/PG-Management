import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class RequesterBase {

//#region requesterId Prop
        @prop()
        requesterId : number;
//#endregion requesterId Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region bedId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        bedId : number;
//#endregion bedId Prop


//#region softDelete Prop
        @prop()
        softDelete : boolean;
//#endregion softDelete Prop





}