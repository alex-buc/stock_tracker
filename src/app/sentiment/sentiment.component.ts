import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  public symbol:string = '';
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.symbol = this.activeRoute.snapshot.paramMap.get("symbol")??'';

  }

}
