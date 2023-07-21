export interface Product {
  description: string;
  img: string;
  name: string;
  new_price: number;
  old_price: number;
  rating: number;
  tag: string;
}

export interface ProductState {
  products: Product[];
}
