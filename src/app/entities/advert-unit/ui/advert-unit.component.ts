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
  selector: 'app-advert-unit',
  templateUrl: './advert-unit.component.html',
  styleUrls: ['./advert-unit.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AdvertUnitComponent {
  advertUnits: AdUnit[] = [
    {
      backgroundUrl: 'assets/advert-unit/unit-1.png',
      subtitle: 'Natural!!',
      subtitleColor: 'white',
      title: 'Get Garden Fresh Fruits',
      titleColor: 'white',
    },
    {
      backgroundUrl: '/assets/advert-unit/unit-2.png',
      subtitle: 'Natural!!',
      subtitleColor: 'green',
      title: 'Get 10% off on Vegetables',
      titleColor: 'primary',
    },
  ];
}
