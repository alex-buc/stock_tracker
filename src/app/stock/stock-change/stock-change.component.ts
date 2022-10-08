import { Component, OnInit, Input } from '@angular/core';
import { StockQuoteModel } from '../shared/stock.model'

@Component({
  selector: 'stock-change',
  templateUrl: './stock-change.component.html',
  styleUrls: ['./stock-change.component.scss']
})
export class StockChangeComponent implements OnInit {

  @Input() 
  data!:StockQuoteModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
