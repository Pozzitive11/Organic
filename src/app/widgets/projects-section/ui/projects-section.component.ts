import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsUnitComponent } from '@entities/projects-unit';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectsUnitComponent, RouterModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {}
