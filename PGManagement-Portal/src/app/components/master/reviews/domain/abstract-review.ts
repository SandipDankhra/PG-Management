import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Review } from '@app/models';

@http({
hostKey:'server',
path:'api/Reviews'
})
export class AbstractReview extends RxHttp {
    reviewFormGroup: IFormGroup<Review>
}
