import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
