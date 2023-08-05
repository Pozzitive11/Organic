export interface CartProduct {
  id: number;
  quantity: number;
  price: number;
}

export interface CartState {
  cartProducts: CartProduct[];
}
