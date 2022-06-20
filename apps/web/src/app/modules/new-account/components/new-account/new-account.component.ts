import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account as IAccount } from '@cefwm-angular/common';

@Component({
  selector: 'cefwm-angular-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  public title: FormControl = new FormControl('', Validators.required);
  public amount: FormControl = new FormControl('', Validators.required);
  public category: FormControl = new FormControl('', Validators.required);
  // public type: FormControl = new FormControl('', Validators.required);

  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(null),
    title: this.title,
    amount: this.amount,
    category: this.category,
    // type: this.type,
  });

  constructor(private activatedRoute: ActivatedRoute) {}

  public onSubmit(account: IAccount) {
    console.log(account);
    // criar o servico newaccountservice
  }

  ngOnInit(): void {
    console.log('');
  }
}
