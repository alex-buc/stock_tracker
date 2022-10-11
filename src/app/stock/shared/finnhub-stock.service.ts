import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin } from 'rxjs';
import {StockModel, StockQuoteModelResult, StockInfoModelResult} from './stock.model'

@Injectable({
  providedIn: 'root'
})
export class FinnhubStockService {
  constructor(private httpClient:HttpClient) { }

  public getStockInfoBySymbol(symbol:string):Observable<StockModel> {
    let quote = this.httpClient.get<StockQuoteModelResult>(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    ).pipe(map((data)=>{
        return {
          currentPrice:data.c,
          change:data.d,
          percentChange:data.dp,
          highestPriceToday:data.h,
          lowestPriceToday:data.l,
          openingPrice:data.o,
          previousClosePrice:data.pc           
        }
    }));

    let stockInfo = this.httpClient.get<StockInfoModelResult>(
      `https://finnhub.io/api/v1/search?q=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    ).pipe(map((data)=>{
      if(data.count && data.count>0) 
        return data.result[0];
      else
        return null;
    }));

    return forkJoin([stockInfo,quote]).pipe(map(results=>{
      if(!results[0]){
        return {
          error:"Something went worng!"
        } as StockModel;
      }
      else
        return {
          symbol:symbol,
          info:results[0],
          quote:results[1]
        } as StockModel
    }));
  }
}
