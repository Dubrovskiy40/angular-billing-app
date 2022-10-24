import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User, UserResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private _currentUserToken: AuthResponse
  constructor(
      private _http: HttpClient
    ) { }

    setUser(res: any) {
      this._currentUserToken = res
      localStorage.setItem('token', this._currentUserToken.auth_token)
    }

    getCurrentUserToken() {
      return localStorage.getItem('token')
    }

    getUserInfo(): Observable<UserResponse[]> {
      return this._http.get<UserResponse[]>(environment.APIUrl + '/user_info', {
        headers: new HttpHeaders({
          'Authorization': `Token ${this.getCurrentUserToken()}`
        })
      })
    }

}
