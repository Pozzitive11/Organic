import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsUnitComponent } from '@entities/projects-unit/ui/projects-unit.component';

@Component({
  selector: 'app-projects-single-page',
  standalone: true,
  imports: [CommonModule, ProjectsUnitComponent],
  templateUrl: './projects-single-page.component.html',
  styleUrls: ['./projects-single-page.component.scss'],
})
export class ProjectsSinglePageComponent {}
