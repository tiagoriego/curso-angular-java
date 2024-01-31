import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL_CLIENT_API } from '../envs/env';
import { Observable } from 'rxjs';
import { AccessToken, User } from '../interfaces/user-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = BASE_URL_CLIENT_API

  constructor(private httpClient: HttpClient) { }

  auth(email: string, password: string): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(`${this.baseUrl}/login`, { email, password })
  }

  saveAccessToken(userToken: AccessToken): void {
    localStorage.setItem('token', userToken.accessToken)
    localStorage.setItem('user', JSON.stringify(userToken.user))
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isValidToken(): boolean {
    const token = this.getToken()
    if (!token) return false
    try {
      const parseToken = atob(token.split('.')[1])
      const objToken = JSON.parse(parseToken)
      const exp = parseInt(objToken['exp'])
      return (new Date(exp * 1000)) > (new Date())
    } catch (_) {
      return false
    }
  }

  getUser(): User | null {
    const user = localStorage.getItem('user')
    if (!user) return null
    try {
      const objUser = JSON.parse(user)
      return objUser as User
    } catch (_) {
      return null
    }
  }

  getRules(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`)
  }

  logout(): void {
    localStorage.clear()
  }
}
