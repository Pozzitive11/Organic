import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateProductsQuantityComponent } from './calculate-products-quantity.component';

describe('CalculateProductsQuantityComponent', () => {
  let component: CalculateProductsQuantityComponent;
  let fixture: ComponentFixture<CalculateProductsQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateProductsQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateProductsQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
