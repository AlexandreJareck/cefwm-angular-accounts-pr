/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User as IUser } from '@cefwm-angular/common';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cefwm-angular-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit, OnDestroy {
  private subDestruction: Subject<void> = new Subject();
  public username: FormControl = new FormControl('', Validators.required);
  public password: FormControl = new FormControl('', Validators.required);

  private random = Math.random().toString();

  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(Number(this.random.slice(this.random.length - 4))),
    username: this.username,
    password: this.password,
  });

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  public onSubmit(user: IUser) {
    if (!this.validationFormGroup()) {
      return;
    }

    this.authService.newUser(user).subscribe(() => {
      this.messageService.add({
        severity: 'sucess',
        summary: 'Cadastro realizado!',
        detail:
          'Seu cadastro foi realizado, agora efetue o login para acessar o sistema!',
      });
      this.router.navigate(['/login/']);
    });
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
