import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'cefwm-angular-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAll().subscribe();
  }
}
