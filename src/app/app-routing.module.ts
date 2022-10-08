import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { SentimentComponent } from './sentiment/sentiment.component';

const routes: Routes = [
  { path: "sentiment/:symbol",component:SentimentComponent},
  { path: "stocks",component:StockComponent},
  { path:"**", component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
