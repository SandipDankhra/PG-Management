import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Expense } from '@app/models';

export class AbstractExpense extends RxHttp {
    expenseFormGroup: IFormGroup<Expense>
}
