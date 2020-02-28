import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class EmployeeBase {

//#region employeeId Prop
        @prop()
        employeeId : number;
//#endregion employeeId Prop


//#region salary Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        salary : number;
//#endregion salary Prop


//#region joinDate Prop
        @required()
        joinDate : any;
//#endregion joinDate Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop





}