import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUnitComponent } from './advert-unit.component';

describe('AdUnitComponent', () => {
  let component: AdUnitComponent;
  let fixture: ComponentFixture<AdUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdUnitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
