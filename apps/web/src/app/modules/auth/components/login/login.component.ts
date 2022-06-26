/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cefwm-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    if (!this.validationFormGroup()) {
      return;
    }
    this.login();
  }

  private validationFormGroup(): boolean {
    if (!this.formGroup.valid) {
      this.messageToast(
        'error',
        'Campos obrigatórios não preenchido!',
        'Todos os campos são obrigatórios!'
      );
      return false;
    }

    return true;
  }

  private messageToast(
    severity: 'error' | 'success',
    summary: string,
    detail: string
  ): void {
    this.messageService.add({
      severity,
      summary,
      detail,
    });
  }

  private isLoginSucces(token: string, userId: string) {
    this.messageToast(
      'success',
      'Login efetuado com sucesso!',
      'Seja-bem vindo!'
    );
    this.router.navigate(['/']);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  private isLoginError() {
    this.messageToast('error', 'Login ou senha incorreto', 'Tente novamente');
  }

  private login() {
    this.authService
      .auth(this.formGroup.value)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) => {
          return of(undefined);
        })
      )
      .subscribe((resultado: { token: string; _id: number } | undefined) => {
        if (!resultado) {
          this.isLoginError();
        } else {
          this.isLoginSucces(resultado.token, resultado._id.toString());
        }
      });
  }
}
