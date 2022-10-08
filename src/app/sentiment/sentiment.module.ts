import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SentimentComponent } from './sentiment.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SentimentHeaderComponent } from './sentiment-header/sentiment-header.component';
import { SentimentStatisticsComponent } from './sentiment-statistics/sentiment-statistics.component'



@NgModule({
  declarations: [
    SentimentComponent,
    SentimentHeaderComponent,
    SentimentStatisticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SentimentModule { }
