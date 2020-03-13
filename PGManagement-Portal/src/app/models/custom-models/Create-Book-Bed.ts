import { prop, propObject, propArray, required, maxLength, range, numeric, date, alpha, password } from "@rxweb/reactive-form-validators"
export class CreateBookBed {

    //#region bookBedId Prop
    @prop()
    bookBedId: number;
    //#endregion bookBedId Prop


    //#region bedId Prop

    @required()
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    bedId: number;
    //#endregion bedId Prop


    //#region rentalId Prop
    
     //@required()
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    rentalId: number;
    //#endregion rentalId Prop
    //#region paymentId Prop
    
    @required()
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    userId: number;
    //#endregion paymentId Prop

    //#region paymentId Prop
    
    @required()
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    paymentTypeId: number;
    //#endregion paymentId Prop

    //#region paymentId Prop
    
    @required()
    @numeric()
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    paymentAmount: number;
    //#endregion paymentId Prop


    //#region startDate Prop
    @required()
    
    startDate: Date;
    //#endregion startDate Prop


    //#region endDate Prop
    @required()
    endDate: Date;
    //#endregion endDate Prop


    //#region endDate Prop
    @required()
    rentalType: number;
    //#endregion endDate Prop

    //#region endDate Prop
    @required()
    @alpha()
    rentalCity: string;
    //#endregion endDate Prop





}