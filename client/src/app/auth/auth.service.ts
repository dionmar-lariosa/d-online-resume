import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../app.enum';
import { Login_i, TokenPayload_i } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: Login_i) {
    return this.http.post<TokenPayload_i>(`${api.host}/auth/login`, body);
  }
}
