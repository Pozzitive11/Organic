import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@entities/product/models/products.model';

@Pipe({
  name: 'productSearch',
  standalone: true,
})
export class ProductSearchPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    searchTerm = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm);
    });
  }
}
