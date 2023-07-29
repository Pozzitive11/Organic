import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '@shared/ui/banner/banner.component';
import { NewsListComponent } from '@widgets/news-list';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, BannerComponent, NewsListComponent],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {}
