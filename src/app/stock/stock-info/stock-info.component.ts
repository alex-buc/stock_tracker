import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import { StockInfoModel } from '../shared/stock.model'

@Component({
  selector: 'stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {

  @Input()
  data!: StockInfoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
