import { Component, OnInit } from '@angular/core';
import { ITarif, UserResponse } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  public tarifStory: ITarif[]
  public statusString: string = 'Загрузка...'
  private user: UserResponse

  constructor(
    private _dataService: DataService,
    private _userService: UserService
  ) { }


  ngOnInit(): void {
        this._dataService.getHistory().subscribe(
          (res) => {
             this.tarifStory = res
          }, e => {
            if (e.status === 404) {
              this.statusString = "История пуста"
          } else {
            this.statusString = "Произошла ошибка при загрузке данных. Пожалуйста попробуйте позже"
          }
        }
        )

  }

}
