import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { StockModel } from '../shared/stock.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage:Storage;
  changes$ = new Subject<StockModel[]>();
  key:string = "stoks";

  constructor() {
    this.localStorage = window.localStorage;
  }

  get():StockModel[] {
    if (this.isLocalStorageSupported) {
      let value = this.localStorage.getItem(this.key);
      if(value){
        return JSON.parse(value) as StockModel[]; 
      }
    }
    return [] as StockModel[];
  }
  set(value: StockModel): boolean {
    if (this.isLocalStorageSupported) {
      let data = this.get()??[] as StockModel[];
      data = data.filter((elem:any) => elem.symbol != value.symbol);
      data.push(value);
      this.localStorage.setItem(this.key, JSON.stringify(data));
      this.changes$.next(data);
      return true;
    }
    return false;
  }
  remove(symbol:string):boolean {
    if(this.isLocalStorageSupported) {
      let data = this.get()??[] as StockModel[];
      data = data.filter((elem:any) => elem.symbol != symbol);
      this.localStorage.setItem(this.key, JSON.stringify(data));
      this.changes$.next(data);
      return true;
    }
    return false;
    
  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
