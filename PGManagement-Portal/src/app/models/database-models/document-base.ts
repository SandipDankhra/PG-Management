import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class DocumentBase {

//#region documentId Prop
        @prop()
        documentId : number;
//#endregion documentId Prop


//#region documentTypeId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        documentTypeId : number;
//#endregion documentTypeId Prop


//#region documentUrl Prop
        @required()
        @maxLength({value:50})
        documentUrl : string;
//#endregion documentUrl Prop


//#region uploadDateTime Prop
        @required()
        uploadDateTime : any;
//#endregion uploadDateTime Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop



}