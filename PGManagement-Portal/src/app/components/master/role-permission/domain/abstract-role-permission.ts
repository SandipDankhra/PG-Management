import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { RolePermission } from '@app/models';

export class AbstractRolePermission extends RxHttp {
    rolePermissionFormGroup: IFormGroup<RolePermission>
}
