import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { CreateBookBed } from '@app/custom-models';
import { anonymous } from '@rxweb/angular-router';



@http({
    hostKey: 'server',
    path: 'api/CreateBookBed'

})


export class AbstractCreateBookBed extends RxHttp {


    createBookBedFormGroup: IFormGroup<CreateBookBed>
}
