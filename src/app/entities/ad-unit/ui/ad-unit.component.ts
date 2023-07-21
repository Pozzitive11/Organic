import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AdUnit {
  backgroundUrl: string;
  subtitle: string;
  subtitleColor: string;
  title: string;
  titleColor: string;
}

@Component({
  selector: 'app-ad-unit',
  templateUrl: './ad-unit.component.html',
  styleUrls: ['./ad-unit.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AdUnitComponent {
  adUnits: AdUnit[] = [
    {
      backgroundUrl: 'assets/ad-unit/unit-1.png',
      subtitle: 'Natural!!',
      subtitleColor: 'white',
      title: 'Get Garden Fresh Fruits',
      titleColor: 'white',
    },
    {
      backgroundUrl: '/assets/ad-unit/unit-2.png',
      subtitle: 'Natural!!',
      subtitleColor: 'green',
      title: 'Get 10% off on Vegetables',
      titleColor: 'primary',
    },
  ];
}
