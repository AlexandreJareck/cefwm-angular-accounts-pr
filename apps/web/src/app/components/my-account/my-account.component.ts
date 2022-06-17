/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Account as IAccount } from '@cefwm-angular/common';
import { Observable, Subject } from 'rxjs';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'cefwm-angular-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  public accounts: IAccount[] = [];

  public total: number = 0;
  public payable: number = 0;
  public receivable: number = 0;

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
    this.accountService.getAll().subscribe((account) => {
      this.accounts = account;
    });
  }
}
