import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() maxStars: number = 5;
  @Input() initialStars: number = 0;

  stars: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    this.stars = Array(this.maxStars)
      .fill(false)
      .map((_, index) => index < this.initialStars);
  }
}
