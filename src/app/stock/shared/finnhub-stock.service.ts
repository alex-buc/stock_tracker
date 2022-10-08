import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin } from 'rxjs';
import {StockModel} from './stock.model'

@Injectable({
  providedIn: 'root'
})
export class FinnhubStockService {
  constructor(private httpClient:HttpClient) { }

  public getStockInfoBySymbol(symbol:string):Observable<any> {
    let quote = this.httpClient.get(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    ).pipe(map((data:any)=>{
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

    let stockInfo = this.httpClient.get(
      `https://finnhub.io/api/v1/search?q=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    ).pipe(map((data:any)=>{
      if(data.count && data.count>0) 
        return data.result[0];
      else
        return null;
    }));

    return forkJoin([stockInfo,quote]).pipe(map(results=>{
      if(!results[0]){
        return {
          error:"Something went worng!"
        };
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
