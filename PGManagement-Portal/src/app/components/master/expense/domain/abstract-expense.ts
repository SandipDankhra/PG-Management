import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Expens } from '@app/models';

@http({
    hostKey:'server',
    path:"api/Expense"
})

export class AbstractExpense extends RxHttp {
    expenseFormGroup: IFormGroup<Expens>
}
