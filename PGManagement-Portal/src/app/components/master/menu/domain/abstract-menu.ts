import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Menu } from '@app/models';

export class AbstractMenu extends RxHttp {
    menuFormGroup: IFormGroup<Menu>
}
