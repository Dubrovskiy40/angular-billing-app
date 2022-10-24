import { Component, OnInit, Input } from '@angular/core';
import {IProduct} from "../../shared/interfaces";
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from "../dialog/dialog.component";
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct

  constructor(
    public dialog: MatDialog
    ) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent,  {
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.product,
    });
  }

  ngOnInit(): void {
  
  }

}




