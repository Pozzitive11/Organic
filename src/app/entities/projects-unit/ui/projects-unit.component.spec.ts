import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUnitComponent } from './projects-unit.component';

describe('ProjectsUnitComponent', () => {
  let component: ProjectsUnitComponent;
  let fixture: ComponentFixture<ProjectsUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsUnitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
