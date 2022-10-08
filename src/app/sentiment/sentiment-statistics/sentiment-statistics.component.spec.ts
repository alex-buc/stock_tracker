import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentStatisticsComponent } from './sentiment-statistics.component';

describe('SentimentStatisticsComponent', () => {
  let component: SentimentStatisticsComponent;
  let fixture: ComponentFixture<SentimentStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
