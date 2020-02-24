import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRentalRecordBase {

//#region roleName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'roleName', keyColumn: false})
        roleName : string;
//#endregion roleName Prop


//#region rentalCity Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'rentalCity', keyColumn: false})
        rentalCity : string;
//#endregion rentalCity Prop


//#region rentalType Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'rentalType', keyColumn: true})
        rentalType : number;
//#endregion rentalType Prop


//#region firstName Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region email Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'email', keyColumn: false})
        email : string;
//#endregion email Prop


//#region documentUrl Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'documentUrl', keyColumn: false})
        documentUrl : string;
//#endregion documentUrl Prop


//#region roomNumber Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'roomNumber', keyColumn: false})
        roomNumber : string;
//#endregion roomNumber Prop


//#region roomType Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'roomType', keyColumn: false})
        roomType : number;
//#endregion roomType Prop


//#region address Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'address', keyColumn: false})
        address : string;
//#endregion address Prop


//#region bedPrice Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'bedPrice', keyColumn: false})
        bedPrice : number;
//#endregion bedPrice Prop


//#region flatNumber Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'flatNumber', keyColumn: false})
        flatNumber : string;
//#endregion flatNumber Prop


//#region flatName Prop
        @gridColumn({visible: true, columnIndex:12, allowSorting: true, headerKey: 'flatName', keyColumn: false})
        flatName : string;
//#endregion flatName Prop


//#region bedId Prop
        @gridColumn({visible: true, columnIndex:13, allowSorting: true, headerKey: 'bedId', keyColumn: false})
        bedId : number;
//#endregion bedId Prop


//#region roomSharing Prop
        @gridColumn({visible: true, columnIndex:14, allowSorting: true, headerKey: 'roomSharing', keyColumn: false})
        roomSharing : string;
//#endregion roomSharing Prop


//#region endDate Prop
        @gridColumn({visible: true, columnIndex:15, allowSorting: true, headerKey: 'endDate', keyColumn: false})
        endDate : any;
//#endregion endDate Prop


//#region applicationObjectName Prop
        @gridColumn({visible: true, columnIndex:16, allowSorting: true, headerKey: 'applicationObjectName', keyColumn: false})
        applicationObjectName : string;
//#endregion applicationObjectName Prop


//#region mobileNumber Prop
        @gridColumn({visible: true, columnIndex:17, allowSorting: true, headerKey: 'mobileNumber', keyColumn: false})
        mobileNumber : any;
//#endregion mobileNumber Prop


//#region documentTypeId Prop
        @gridColumn({visible: true, columnIndex:18, allowSorting: true, headerKey: 'documentTypeId', keyColumn: false})
        documentTypeId : number;
//#endregion documentTypeId Prop


//#region uploadDateTime Prop
        @gridColumn({visible: true, columnIndex:19, allowSorting: true, headerKey: 'uploadDateTime', keyColumn: false})
        uploadDateTime : any;
//#endregion uploadDateTime Prop


//#region startDate Prop
        @gridColumn({visible: true, columnIndex:20, allowSorting: true, headerKey: 'startDate', keyColumn: false})
        startDate : any;
//#endregion startDate Prop


//#region paymentTypeId Prop
        @gridColumn({visible: true, columnIndex:21, allowSorting: true, headerKey: 'paymentTypeId', keyColumn: false})
        paymentTypeId : number;
//#endregion paymentTypeId Prop


//#region paymentAmount Prop
        @gridColumn({visible: true, columnIndex:22, allowSorting: true, headerKey: 'paymentAmount', keyColumn: false})
        paymentAmount : number;
//#endregion paymentAmount Prop

}