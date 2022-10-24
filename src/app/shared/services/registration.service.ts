import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registration } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http: HttpClient ) { }

  registration(data: Registration): Observable<Registration> {
    return this._http.post<Registration>(environment.APIUrl + "/auth/users/", data)
  }
}
