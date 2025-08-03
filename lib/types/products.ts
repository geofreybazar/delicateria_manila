interface Images {
  url: string;
  publicId: string;
  _id: string;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  category: {
    id: string;
    name: string;
  };
  images: Images[];
  isOnSale: boolean;
  price: number;
  status: string;
  stockQuantity: number;
}

export interface ReturnedProducts {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  products: Products[];
}
