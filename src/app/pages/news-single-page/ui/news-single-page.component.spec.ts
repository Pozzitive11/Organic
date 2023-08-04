import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSinglePageComponent } from './news-single-page.component';

describe('NewsSinglePageComponent', () => {
  let component: NewsSinglePageComponent;
  let fixture: ComponentFixture<NewsSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSinglePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
