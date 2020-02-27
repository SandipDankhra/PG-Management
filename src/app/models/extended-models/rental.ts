import {RentalBase} from '../database-models/rental-base';
import {UserBase} from '../database-models/user-base';
import {BookBedBase} from '../database-models/book-bed-base';
import {ComplaintBase} from '../database-models/complaint-base';
import {ReviewBase} from '../database-models/review-base';
//Generated Imports
export class Rental extends RentalBase 
{




//#region Generated Reference Properties
//#region user Prop
user : UserBase;
//#endregion user Prop
//#region bookBed Prop
bookBed : BookBedBase[];
//#endregion bookBed Prop
//#region complaints Prop
complaints : ComplaintBase[];
//#endregion complaints Prop
//#region reviews Prop
reviews : ReviewBase[];
//#endregion reviews Prop

//#endregion Generated Reference Properties




















}