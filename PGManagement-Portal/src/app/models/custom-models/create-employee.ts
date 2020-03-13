import { prop, propObject, propArray, required, maxLength, range, email, alpha, numeric, password, NumericValueType, minLength, mask, pattern } from "@rxweb/reactive-form-validators"
import { RestrictInputDirective } from 'src/app/domain/custom-directives/restrict-input';
export class CreateEmployee {

    @required()
    @alpha()
    // @pattern({expression:{'onlyAlpha': /^[A-Za-z]+$/} }) 
    // @RestrictInputDirective()
    firstName:string;

    @required()
    @alpha()
    lastName:string;

    @required()
    @numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:true })
    salary:number;

    @required()
    joinDate:Date;

   @required()
    @email()
    email:string;

    @required()
    @numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false })
    @mask({mask:'(999)-999 9999' })
    mobileNumber:number;

    @required()
    @password({validation:{minLength: 5,digit: true,specialCharacter: true} }) 
    employeePassword:string;

    @required()
    @prop({defaultValue:'true'})
    loginBlocked:boolean;

    

}