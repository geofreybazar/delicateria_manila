interface Images {
  publicId: string;
  url: string;
  _id: string;
}

interface Items {
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

export interface ReturnedCart {
  id: string;
  isFreeDelivery: boolean;
  totalPrice: number;
  items: {
    productid: Items;
    quantity: number;
    _id: string;
  }[];
}

export interface AddItem {
  userId?: string;
  cartId?: string;
  productId: string;
}

export interface GetCartType {
  cartId?: string;
  userId?: string;
}

export interface ClientUserAddToCartType {
  userId: string;
  productId: string;
}
