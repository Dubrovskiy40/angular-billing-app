import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { OrderRequest, UserResponse } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DataService } from 'src/app/shared/services/data.service';
import { UserService } from 'src/app/shared/services/user.service';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  private _user: UserResponse

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    private _userService: UserService,
    private _dataService: DataService,
    private _alert: AlertService
    ) {
  }

  buyProduct() {
    const order: OrderRequest = {
      user_id: this._user.user_id,
      tariff_id: this.data.id
    }

    this._alert

    this._dataService.buyTariff(order).subscribe(
      () => {
        this._alert.success(`Вы успешно купили тариф  ${this.data.title}`)
      },
      e => {
        console.log(this._alert.warning('Произошла ошибка при покупке тарифа'))
      }
    )
    this.dialogRef.close()

  }


  ngOnInit(): void {
    this._userService.getUserInfo().subscribe(res => {
      this._user = res[0]
    }, e => console.log(e)

    )
  }

}
