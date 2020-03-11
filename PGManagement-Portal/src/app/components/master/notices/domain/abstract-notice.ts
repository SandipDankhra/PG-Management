import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Notice } from '@app/models';
import { anonymous } from '@rxweb/angular-router';

@http({
    hostKey: 'server',
    path: 'api/Notices'
})
export class AbstractNotice extends RxHttp {
    noticeFormGroup: IFormGroup<Notice>
}
