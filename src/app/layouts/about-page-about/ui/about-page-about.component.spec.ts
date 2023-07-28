import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageAboutComponent } from './about-page-about.component';

describe('AboutPageAboutComponent', () => {
  let component: AboutPageAboutComponent;
  let fixture: ComponentFixture<AboutPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
