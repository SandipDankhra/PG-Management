import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Review } from '@app/models';

export class AbstractReview extends RxHttp {
    reviewFormGroup: IFormGroup<Review>
}
