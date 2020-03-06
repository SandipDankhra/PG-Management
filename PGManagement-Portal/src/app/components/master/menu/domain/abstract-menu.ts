import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Menu } from '@app/models';

@http({
    hostKey: "server",
    path: "api/menu",
})
export class AbstractMenu extends RxHttp {
    menuFormGroup: IFormGroup<Menu>
}
