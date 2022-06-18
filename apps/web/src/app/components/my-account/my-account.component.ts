/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Account as IAccount } from '@cefwm-angular/common';
import { AccountService } from '../../services/account.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cefwm-angular-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  public accounts: IAccount[] = [];

  private subDestruction: Subject<void> = new Subject();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getMyAccounts();
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }

  getMyAccounts(): void {
    this.accountService.getAll().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
}
