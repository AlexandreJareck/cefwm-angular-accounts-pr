import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User as IUser } from '@cefwm-angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public auth(dados: {
    username: string;
    password: string;
  }): Observable<{ token: string; _id: number }> {
    return this.httpClient.post<{ token: string; _id: number }>(
      '/api/auth',
      dados
    );
  }

  public newUser(user: IUser): Observable<IUser> {
    console.log(user)
    return this.httpClient.post<IUser>('/api/auth/new-user/', user);
  }
}
