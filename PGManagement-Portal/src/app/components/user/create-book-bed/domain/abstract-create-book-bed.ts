import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { CreateBookBed } from '@app/models';

export class AbstractCreateBookBed extends RxHttp {
    createBookBedFormGroup: IFormGroup<CreateBookBed>
}
