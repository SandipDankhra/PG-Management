import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MenuBase {

//#region day Prop
        @prop()
        day : number;
//#endregion day Prop


//#region breakFast Prop
        @required()
        @maxLength({value:50})
        breakFast : string;
//#endregion breakFast Prop


//#region lunch Prop
        @required()
        @maxLength({value:50})
        lunch : string;
//#endregion lunch Prop


//#region dinner Prop
        @required()
        @maxLength({value:50})
        dinner : string;
//#endregion dinner Prop

}