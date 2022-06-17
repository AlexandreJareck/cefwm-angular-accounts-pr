/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Account as IAccount } from '@cefwm-angular/common';
import { AccountService } from '../../services/account.service';
import { Summary } from '../../models/summary';
import { Subject } from 'rxjs';

@Component({
  selector: 'cefwm-angular-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  public accounts: IAccount[] = [];
  public summary: Summary = {} as Summary;

  private subDestruction: Subject<void> = new Subject();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getMyAccounts();
    // console.log('chamadou aqui', this.accounts);
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }

  getMyAccounts(): void {
    this.accountService.getAll().subscribe((accounts) => {
      this.accounts = accounts;

      this.summary = this.accounts.reduce(
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
    });
  }
}
