import { Component, OnInit } from '@angular/core';
import { ITarif, UserResponse } from '../../interfaces';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-active-tariff',
  templateUrl: './active-tariff.component.html',
  styleUrls: ['./active-tariff.component.scss']
})
export class ActiveTariffComponent implements OnInit {

  public user: UserResponse
  activeTarif: ITarif;
  statusString: string = 'Загрузка...';

  constructor(
    private _dataService: DataService,
  ) { }

  getStatus(): boolean {
    const dateNow: Date = new Date()

    if (dateNow < new Date(this.activeTarif.end_date)) {
      return true
    } else {
      return false
    }
    
  }

  ngOnInit(): void {
      this._dataService.getActiveTariff().subscribe(
        (res) => {
          this.activeTarif = res
          this.getStatus()
        }, e => {
            if (e.status === 404 ) {
              this.statusString = "Отсутствует активный тариф"
            } else {
              this.statusString = "Ошибка при загрузке данных"
            }
        }
      )
  }

}
