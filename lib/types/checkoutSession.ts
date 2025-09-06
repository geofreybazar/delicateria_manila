export interface Items {
  id: string;
  productid: string;
  name: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  imgUrl: string;
}

interface CartStateItems {
  productid: string;
  description: string;
  name: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

export type CartState = {
  cartId: string | null;
  items: CartStateItems[];
  totalPrice: number;
  isFreeDelivery: boolean;
};

interface itemsToSave {
  _id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

export interface ReturnedCheckoutSession {
  cartId: string;
  id: string;
  items: itemsToSave[];
  expiresAt: Date;
  totalPrice: number;
  reserved: boolean;
  status: string;
  isFreeDelivery: boolean;
  message?: string;
  title?: string;
  itemsNoStock?: {
    availableStock: number;
    productName: string;
    id: string;
  }[];
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  imgUrl: string;
  _id: string;
}

export interface OrderInput {
  emailAddress: string;
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  shippingFee: number;
  items: OrderItem[];
  sessionId: string;
}
