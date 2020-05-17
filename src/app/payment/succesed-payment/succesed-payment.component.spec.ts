import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesedPaymentComponent } from './succesed-payment.component';

describe('SuccesedPaymentComponent', () => {
  let component: SuccesedPaymentComponent;
  let fixture: ComponentFixture<SuccesedPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesedPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
