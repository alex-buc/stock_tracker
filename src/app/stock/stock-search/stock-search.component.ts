import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { LocalStorageService } from '../shared/local-storage.service';
import { FinnhubStockService } from '../shared/finnhub-stock.service'


@Component({
  selector: 'stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {

  public Symbol:string = "";
  
  apiUrlName = ""

  constructor(
    private notificationService: NotifierService,
    private localStorageService: LocalStorageService,
    private finnhubStockService: FinnhubStockService
  ) { }

  ngOnInit(): void {
  }

  public getStackBySymbol(){
    this.finnhubStockService
        .getStockInfoBySymbol(this.Symbol)
        .subscribe(data=>{
            let notificationMsjType = 'false';
            let msj = '';

            if(data.error){
              let notificationMsjType = 'error';
              let msj = data.error;
            }
            else
            {
              let isValueSet = this.localStorageService.set(data);

              if(isValueSet){
                notificationMsjType = 'success';
                msj = `Data successfuly retrived for ${this.Symbol}`;
              }
            }
            this.notificationService.notify(notificationMsjType, msj);
        });
  }
}
