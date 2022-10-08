import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentHeaderComponent } from './sentiment-header.component';

describe('SentimentHeaderComponent', () => {
  let component: SentimentHeaderComponent;
  let fixture: ComponentFixture<SentimentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
