import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account as IAccount } from '@cefwm-angular/common';
import { Subject } from 'rxjs';
import { NewAccountService } from '../../services/new-account.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'cefwm-angular-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit, OnDestroy {
  private subDestruction: Subject<void> = new Subject();

  public title: FormControl = new FormControl('', Validators.required);
  public amount: FormControl = new FormControl('', Validators.required);
  public category: FormControl = new FormControl('', Validators.required);
  public type: FormControl = new FormControl('', Validators.required);

  private random = Math.random().toString();

  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(Number(this.random.slice(this.random.length - 4))),
    title: this.title,
    amount: this.amount,
    category: this.category,
    type: this.type,
  });

  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private newAccountService: NewAccountService
  ) {}

  ngOnInit(): void {
    console.log('');
  }

  public onSubmit(account: IAccount) {
    if (!this.validationFormGroup()) {
      return;
    }
    account.userId = Number(localStorage.getItem('userId'));
    account.createdAt = new Date().toString();
    this.newAccountService.post(account).subscribe(() => {
      this.router.navigate(['/account/my-accounts/']);
    });
  }

  public setType(type: string): void {
    this.type.setValue(type);
  }

  private validationFormGroup(): boolean {
    if (!this.formGroup.valid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Campos obrigatórios não preenchido!',
        detail: 'Todos os campos são obrigatórios!',
      });
      return false;
    }

    return true;
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }
}
