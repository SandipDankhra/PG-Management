import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ReviewBase {

//#region reviewId Prop
        @prop()
        reviewId : number;
//#endregion reviewId Prop


//#region rating Prop
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        @required()
        rating : number;
//#endregion rating Prop


//#region reviewDescription Prop
        @prop()
        reviewDescription : string;
//#endregion reviewDescription Prop


//#region rentalId Prop
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        @required()
        rentalId : number;
//#endregion rentalId Prop



}