import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class NoticeBase {

//#region noticeId Prop
        @prop()
        noticeId : number;
//#endregion noticeId Prop


//#region noticeDescription Prop
        @required()
        noticeDescription : string;
//#endregion noticeDescription Prop


//#region createdDate Prop
        @prop()
        createdDate : any;
//#endregion createdDate Prop


//#region createdBy Prop
        @prop()
        createdBy : number;
//#endregion createdBy Prop



}