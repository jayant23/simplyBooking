import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyBookingComponent } from './simply-booking.component';

describe('SimplyBookingComponent', () => {
  let component: SimplyBookingComponent;
  let fixture: ComponentFixture<SimplyBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplyBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
