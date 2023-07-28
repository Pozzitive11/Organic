import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageOfferComponent } from './about-page-offer.component';

describe('AboutPageOfferComponent', () => {
  let component: AboutPageOfferComponent;
  let fixture: ComponentFixture<AboutPageOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageOfferComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
