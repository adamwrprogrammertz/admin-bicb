import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPaymentComponent } from './summary-payment.component';

describe('SummaryPaymentComponent', () => {
  let component: SummaryPaymentComponent;
  let fixture: ComponentFixture<SummaryPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
