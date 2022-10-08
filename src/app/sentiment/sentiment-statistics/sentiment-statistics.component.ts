import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { SentimentModule } from '../sentiment.module';
import { FinnhubSentimentService } from '../shared/finnhub-sentiment.service';
import {SentimentModel} from '../shared/sentiment.model';


@Component({
  selector: 'sentiment-statistics',
  templateUrl: './sentiment-statistics.component.html',
  styleUrls: ['./sentiment-statistics.component.scss']
})
export class SentimentStatisticsComponent implements OnInit {

  @Input() 
  symbol!:string;

  public sentiments:any[] = [];
  constructor(private finnhubSentimentService:FinnhubSentimentService) { }

  ngOnInit(): void {
    let from = moment().subtract(2,"months").format("YYYY-MM-DD");
    let to = moment().format("YYYY-MM-DD");
    this.finnhubSentimentService.getSentiments(this.symbol,from,to).subscribe((data:SentimentModel[])=>{
      this.sentiments = data;
    });
  }
  public getMonthFromInt(month:number):string{
    return moment().month(month-1).format("MMMM");
  }
}
