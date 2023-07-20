import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice',
  standalone: true,
})
export class ProductPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'number') {
      return value;
    }

    return '$' + value.toFixed(2);
  }
}
