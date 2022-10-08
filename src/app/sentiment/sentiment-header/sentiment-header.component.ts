import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sentiment-header',
  templateUrl: './sentiment-header.component.html',
  styleUrls: ['./sentiment-header.component.scss']
})
export class SentimentHeaderComponent implements OnInit {

  @Input() 
  symbol!:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
