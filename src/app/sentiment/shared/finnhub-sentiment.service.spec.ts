import { TestBed } from '@angular/core/testing';

import { FinnhubSentimentService } from './finnhub-sentiment.service';

describe('FinnhubSentimentService', () => {
  let service: FinnhubSentimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinnhubSentimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
