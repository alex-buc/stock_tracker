import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { LocalStorageService } from '../shared/local-storage.service';
import { StockModel } from '../shared/stock.model';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  public stocks: StockModel[] = [];
  constructor(
    private localStorageService:LocalStorageService,
    private notificationService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.stocks = this.localStorageService.get();
    this.localStorageService.changes$.subscribe((data:StockModel[])=>{
      this.stocks = data;
    });
  }
  
  public removeStock(symbol:string){
    let isRemoved = this.localStorageService.remove(symbol);
    if(isRemoved){
      this.notificationService.notify('info', `Data successfuly removed for ${symbol}`);
    }
  }
}
