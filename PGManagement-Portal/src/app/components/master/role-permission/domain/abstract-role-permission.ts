import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { RolePermission } from '@app/models';
@http({
    hostKey: 'server',
    path: 'api/rolepermission',
})
export class AbstractRolePermission extends RxHttp {
    rolePermissionFormGroup: IFormGroup<RolePermission>
}
