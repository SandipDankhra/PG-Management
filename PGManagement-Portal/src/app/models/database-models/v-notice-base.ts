import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vNoticeBase {

//#region noticeId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'noticeId', keyColumn: true})
        noticeId : number;
//#endregion noticeId Prop


//#region noticeDescription Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'noticeDescription', keyColumn: false})
        noticeDescription : string;
//#endregion noticeDescription Prop


//#region createdBy Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'createdBy', keyColumn: false})
        createdBy : any;
//#endregion createdBy Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region createdDate Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'createdDate', keyColumn: false})
        createdDate : any;
//#endregion createdDate Prop

}