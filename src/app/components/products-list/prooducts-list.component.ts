import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../models/product";
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: IProduct[]
  public statusString: string = 'Загрузка...'

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getPrice().subscribe(
      (res) => {
        this.products = res
      }, (e) => {
        if(e.status === 404 ) {
          this.statusString = 'Доступные тарифы отсутствуют'
        } else {
          this.statusString = 'Произошла ошибка, попробуйте позже'
        }
      }

    )
  }

}
