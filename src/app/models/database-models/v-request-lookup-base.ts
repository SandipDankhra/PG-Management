import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRequestLookupBase {

//#region expr11 Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'expr11', keyColumn: false})
        expr11 : string;
//#endregion expr11 Prop


//#region expr12 Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'expr12', keyColumn: false})
        expr12 : string;
//#endregion expr12 Prop


//#region expr6 Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'expr6', keyColumn: true})
        expr6 : number;
//#endregion expr6 Prop


//#region expr7 Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'expr7', keyColumn: false})
        expr7 : string;
//#endregion expr7 Prop


//#region expr1 Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'expr1', keyColumn: false})
        expr1 : number;
//#endregion expr1 Prop


//#region expr2 Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'expr2', keyColumn: false})
        expr2 : boolean;
//#endregion expr2 Prop


//#region expr8 Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'expr8', keyColumn: false})
        expr8 : string;
//#endregion expr8 Prop


//#region expr13 Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'expr13', keyColumn: false})
        expr13 : string;
//#endregion expr13 Prop


//#region expr14 Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'expr14', keyColumn: false})
        expr14 : string;
//#endregion expr14 Prop


//#region expr3 Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'expr3', keyColumn: false})
        expr3 : number;
//#endregion expr3 Prop


//#region expr4 Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'expr4', keyColumn: false})
        expr4 : number;
//#endregion expr4 Prop


//#region expr5 Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'expr5', keyColumn: false})
        expr5 : number;
//#endregion expr5 Prop


//#region expr9 Prop
        @gridColumn({visible: true, columnIndex:12, allowSorting: true, headerKey: 'expr9', keyColumn: false})
        expr9 : number;
//#endregion expr9 Prop


//#region expr10 Prop
        @gridColumn({visible: true, columnIndex:13, allowSorting: true, headerKey: 'expr10', keyColumn: false})
        expr10 : number;
//#endregion expr10 Prop

}