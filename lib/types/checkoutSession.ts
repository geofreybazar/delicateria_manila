export interface Items {
  id: string;
  productid: string;
  name: string;
  quantity: number;
  maxQuantity: number;
  price: number;
  imgUrl: string;
}

interface Images {
  publicId: string;
  url: string;
  _id: string;
}

interface Product {
  id: string;
  category: string;
  description: string;
  isOnsale: boolean;
  name: string;
  price: number;
  status: string;
  stockQuantity: number;
  images: Images[];
}

interface CartStateItems {
  _id: string;
  quantity: number;
  productid: Product;
}

export type CartState = {
  guestId: string | null;
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
  id: string;
  guestId: string;
  items: itemsToSave[];
  expiresAt: Date;
  totalPrice: number;
  reserved: boolean;
  status: string;
  isFreeDelivery: boolean;
  message?: string;
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
