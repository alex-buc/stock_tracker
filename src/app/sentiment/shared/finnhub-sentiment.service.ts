import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SentimentModel } from './sentiment.model'

@Injectable({
  providedIn: 'root'
})
export class FinnhubSentimentService {

  constructor(private httpClient:HttpClient) { }

  public getSentiments(symbol:string,from:string,to:string):Observable<any> {
    return this.httpClient.get(
      `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol}&from=${from}&to=${to}&token=bu4f8kn48v6uehqi3cqg`
    ).pipe(map((result:any)=>{
      return result.data as SentimentModel;
    }));
  }
}
