import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BookBedBase {

//#region bookBedId Prop
        @prop()
        bookBedId : number;
//#endregion bookBedId Prop


//#region bedId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        bedId : number;
//#endregion bedId Prop


//#region rentalId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rentalId : number;
//#endregion rentalId Prop


//#region paymentId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paymentId : number;
//#endregion paymentId Prop


//#region createDate Prop
        @prop()
        createDate : any;
//#endregion createDate Prop


//#region startDate Prop
        @required()
        startDate : Date;
//#endregion startDate Prop


//#region endDate Prop
        @required()
        endDate : Date;
//#endregion endDate Prop







}