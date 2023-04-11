import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdershippingComponent } from './ordershipping.component';

describe('OrdershippingComponent', () => {
  let component: OrdershippingComponent;
  let fixture: ComponentFixture<OrdershippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdershippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdershippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
