import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vComplaintRecordBase {

//#region firstName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region complaintId Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'complaintId', keyColumn: true})
        complaintId : number;
//#endregion complaintId Prop


//#region complaintName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'complaintName', keyColumn: false})
        complaintName : string;
//#endregion complaintName Prop


//#region complaintDescription Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'complaintDescription', keyColumn: false})
        complaintDescription : string;
//#endregion complaintDescription Prop


//#region complaintStatus Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'complaintStatus', keyColumn: false})
        complaintStatus : boolean;
//#endregion complaintStatus Prop

}