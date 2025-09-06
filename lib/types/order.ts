export interface ReturnedOrders {
  id: string;
  webhookId: string;
  referenceNumber: string;
  clientUserId?: string;
  type: string;
  deliveryFee: number;
  paymentStatus: string;
  orderStatus: string;
  netAmount: number;
  totalClientPaid: number;
  paymongoFee: number;
  paymentMethod: {
    paymentBrand: string;
    paymentId: string;
    paymentLast4: string;
    paymentType: string;
  };
  deliveryRider?: {
    id: string;
    firstname: string;
    lastname: string;
    middlename: string;
  };
  customerDetails: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  deliveryAddress: {
    line1?: string;
    city: string;
    postalCode: number;
    state: string;
  };
  itemsOrdered: [
    {
      amount: number;
      currency: string;
      desciption?: string;
      images: string[];
      name: string;
      quantity: number;
      _id: string;
    },
  ];
  createdAt: string;
}
