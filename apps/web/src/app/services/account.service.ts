import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Account as IAccount } from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>('/api/accounts').pipe(
      tap((accounts) => {
        return accounts;
      })
    );
  }
}
