import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-stock-symbol-search',
  templateUrl: './stock-symbol-search.component.html',
  styleUrls: ['./stock-symbol-search.component.scss']
})
export class StockSymbolSearchComponent implements OnInit {

  public Symbol:string = "";

  constructor(private notificationService:NotifierService) { }

  ngOnInit(): void {
  }

  public getStackBySymbol(){
    this.notificationService.show({
      type: 'success',
      message: this.Symbol
    });
  }
}
