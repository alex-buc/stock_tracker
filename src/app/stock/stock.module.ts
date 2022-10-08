import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { HttpClientModule } from '@angular/common/http';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { StockQuoteComponent } from './stock-quote/stock-quote.component';
import { StockChangeComponent } from './stock-change/stock-change.component';


@NgModule({
  declarations: [
    StockComponent,
    StockListComponent,
    StockSearchComponent,
    StockInfoComponent,
    StockQuoteComponent,
    StockChangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[ ]
})
export class StockModule { }
