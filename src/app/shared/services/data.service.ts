import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct, ITarif, OrderRequest } from '../interfaces';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  getPrice(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(environment.APIUrl + '/tariffs', {
      headers: new HttpHeaders({
        'Authorization': `Token ${this._userService.getCurrentUserToken()}`
      })
    })
  }

  getHistory(): Observable<ITarif[]> {
    return this._http.get<ITarif[]>(environment.APIUrl + `/order`, {
      headers: new HttpHeaders({
        'Authorization': `Token ${this._userService.getCurrentUserToken()}`
      })
    })
  } 

  buyTariff(order: OrderRequest): Observable<OrderRequest> {
    return this._http.post<OrderRequest>(environment.APIUrl + '/order', order, {
      headers: new HttpHeaders({
        'Authorization': `Token ${this._userService.getCurrentUserToken()}`
      })
    })
  }

  getActiveTariff(): Observable<ITarif>  {
    return this._http.get<ITarif>(environment.APIUrl + `/current_tariff`, {
      headers: new HttpHeaders({
        'Authorization': `Token ${this._userService.getCurrentUserToken()}`
      })
    })
  }


 }
