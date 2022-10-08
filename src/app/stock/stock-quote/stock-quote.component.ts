import { Component, OnInit, Input } from '@angular/core';
import { StockQuoteModel } from '../shared/stock.model'

@Component({
  selector: 'stock-quote',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.scss']
})
export class StockQuoteComponent implements OnInit {

  @Input()
  data!: StockQuoteModel;
  constructor() { }

  ngOnInit(): void {
  }

}
