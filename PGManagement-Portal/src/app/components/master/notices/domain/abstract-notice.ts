import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Notice } from '@app/models';

export class AbstractNotice extends RxHttp {
    noticeFormGroup: IFormGroup<Notice>
}
