/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Account as IAccount } from '@cefwm-angular/common';
import { AccountService } from '../../services/account.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  public accounts: IAccount[] = [];

  private subDestruction: Subject<void> = new Subject();

  constructor(
    private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public newAccount(): void {
    console.log('chegou');
    this.router.navigate(['../new-account'], {
      relativeTo: this.activatedRoute,
    });
  }

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
