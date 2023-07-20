import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFriendlyComponent } from './eco-friendly.component';

describe('EcoFriendlyComponent', () => {
  let component: EcoFriendlyComponent;
  let fixture: ComponentFixture<EcoFriendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoFriendlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
