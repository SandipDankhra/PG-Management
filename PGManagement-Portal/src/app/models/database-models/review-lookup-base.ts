import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ReviewLookupBase {

//#region rating Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'rating', keyColumn: true})
        rating : number;
//#endregion rating Prop


//#region reviewDescription Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'reviewDescription', keyColumn: false})
        reviewDescription : string;
//#endregion reviewDescription Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region userId Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'userId', keyColumn: false})
        userId : number;
//#endregion userId Prop


//#region rentalId Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'rentalId', keyColumn: false})
        rentalId : number;
//#endregion rentalId Prop


//#region reviewId Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'reviewId', keyColumn: false})
        reviewId : number;
//#endregion reviewId Prop

}