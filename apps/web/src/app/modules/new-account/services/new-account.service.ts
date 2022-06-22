import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account as IAccount } from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root',
})
export class NewAccountService {
  constructor(private httpClient: HttpClient) {}

  public post(account: IAccount): Observable<string> {
    return this.httpClient.post<string>(`/api/accounts/`, account);
  }
}
