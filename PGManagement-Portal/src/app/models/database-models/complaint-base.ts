import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ComplaintBase {

//#region complaintId Prop
        @prop()
        complaintId : number;
//#endregion complaintId Prop


//#region complaintName Prop
        @required()
        @maxLength({value:50})
        complaintName : string;
//#endregion complaintName Prop


//#region complaintDescription Prop
        @required()
        complaintDescription : string;
//#endregion complaintDescription Prop


//#region rentalId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rentalId : number;
//#endregion rentalId Prop


//#region complaintStatus Prop
        @required()
        complaintStatus : boolean;
//#endregion complaintStatus Prop



}