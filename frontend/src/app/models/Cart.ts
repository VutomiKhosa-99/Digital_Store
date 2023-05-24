export interface Cart {
    items: Array<CartItem>;
  }
  
  export interface CartItem {
    title: string;
    image: string;
    price: number;
    quantity: number;
    id: string;
  }