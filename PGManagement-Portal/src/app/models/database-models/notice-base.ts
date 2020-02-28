import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class NoticeBase {

//#region noticeId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        noticeId : number;
//#endregion noticeId Prop


//#region noticeDescription Prop
        @prop()
        noticeDescription : string;
//#endregion noticeDescription Prop


//#region createdDate Prop
        @prop()
        createdDate : Date;
//#endregion createdDate Prop


//#region createdBy Prop
        @prop()
        createdBy : number;
//#endregion createdBy Prop

}