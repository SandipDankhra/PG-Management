import { prop, propObject, propArray, required, maxLength, range } from "@rxweb/reactive-form-validators"
export class CreateBookBed {

    //#region bookBedId Prop
    @prop()
    bookBedId: number;
    //#endregion bookBedId Prop


    //#region bedId Prop
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    @required()
    bedId: number;
    //#endregion bedId Prop


    //#region rentalId Prop
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    @required()
    rentalId: number;
    //#endregion rentalId Prop
    //#region paymentId Prop
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    @required()
    userId: number;
    //#endregion paymentId Prop

    //#region paymentId Prop
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    @required()
    paymentTypeId: number;
    //#endregion paymentId Prop

    //#region paymentId Prop
    @range({ minimumNumber: 1, maximumNumber: 2147483647 })
    @required()
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
    rentalCity: string;
    //#endregion endDate Prop





}