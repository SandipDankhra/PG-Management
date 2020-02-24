import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class RoomBase {

//#region roomId Prop
        @prop()
        roomId : number;
//#endregion roomId Prop


//#region flatId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        flatId : number;
//#endregion flatId Prop


//#region roomNumber Prop
        @required()
        @maxLength({value:50})
        roomNumber : string;
//#endregion roomNumber Prop


//#region roomType Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        roomType : number;
//#endregion roomType Prop


//#region roomSharing Prop
        @required()
        @maxLength({value:50})
        roomSharing : string;
//#endregion roomSharing Prop





}