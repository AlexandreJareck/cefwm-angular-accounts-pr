import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '@cefwm-angular/common';
import { Summary } from '../models/summary';

@Pipe({
  name: 'calculate',
})
export class CalculatePipe implements PipeTransform {
  transform(accounts: Account[]): Summary {
    return accounts.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.payable += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.receivable += transaction.amount;
          acc.total -= transaction.amount;
        }
        return acc;
      },
      {
        payable: 0,
        receivable: 0,
        total: 0,
      }
    );
  }
}
