import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductplaceorderComponent } from './productplaceorder.component';

describe('ProductplaceorderComponent', () => {
  let component: ProductplaceorderComponent;
  let fixture: ComponentFixture<ProductplaceorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductplaceorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductplaceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
