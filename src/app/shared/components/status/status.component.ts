import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  public lastOrderTitle: string
  public lastOrderDate: string
  public ordersCount: number

  constructor(
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this._dataService.getHistory().subscribe(
      res => {
        console.log(res);
        this.lastOrderTitle = res[res.length - 1].title
        this.lastOrderDate = res[res.length - 1].buy_date
        this.ordersCount = res.length
      }
    )
  }

}
