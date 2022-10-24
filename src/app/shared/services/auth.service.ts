import { Injectable } from '@angular/core';
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../interfaces";
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private res: any

  // private res: ReplaySubject<User> =new  ReplaySubject<User>(1);
  // public get user() {
  //   return this.res.asObservable()
  // }


  constructor( 
    private _http: HttpClient,
    private _userService: UserService
    ) {}

  getUser() {
    return this.res[0]
  }

  login( user: User ): Observable<User> {
      return this._http.post<User>("api/auth/token/login/", user)
  }

    logout() {
      return this._http.post("api/auth/token/logout/", {}, {
        headers: new HttpHeaders({
          'Authorization': `Token ${this._userService.getCurrentUserToken()}`
        })
      })
    }

}
