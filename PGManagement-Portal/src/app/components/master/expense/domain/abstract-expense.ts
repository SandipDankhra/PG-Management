import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Expense } from '@app/models';

@http({
    hostKey:'server',
    path:"api/Expense"
})

export class AbstractExpense extends RxHttp {
    expenseFormGroup: IFormGroup<Expense>
}
