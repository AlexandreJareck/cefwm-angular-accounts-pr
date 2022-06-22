import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account as IAccount } from '@cefwm-angular/common';
import { NewAccountService } from '../../services/new-account.service';

@Component({
  selector: 'cefwm-angular-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  public title: FormControl = new FormControl('', Validators.required);
  public amount: FormControl = new FormControl('', Validators.required);
  public category: FormControl = new FormControl('', Validators.required);
  public type: FormControl = new FormControl('', Validators.required);

  public random = Math.random().toString();

  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(Number(this.random.slice(this.random.length - 4))),
    title: this.title,
    amount: this.amount,
    category: this.category,
    type: this.type,
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private newAccountService: NewAccountService
  ) {}

  public onSubmit(account: IAccount) {
    account.userId = 2;
    account.createdAt = new Date().toString();
    this.newAccountService.post(account).subscribe();
  }

  ngOnInit(): void {
    console.log('');
  }

  public setType(type: string): void {
    this.type.setValue(type);
  }
}
