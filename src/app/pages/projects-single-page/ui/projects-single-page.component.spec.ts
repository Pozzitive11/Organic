import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSinglePageComponent } from './projects-single-page.component';

describe('ProjectsSinglePageComponent', () => {
  let component: ProjectsSinglePageComponent;
  let fixture: ComponentFixture<ProjectsSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSinglePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
