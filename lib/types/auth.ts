export interface Orders {
  id: string;
  referenceNumber: string;
  orderStatus: string;
  totalClientPaid: number;
  itemsOrdered: string[];
  createdAt: string;
}

export interface ClientUser {
  id: string;
  firstName: string;
  title: string;
  lastName: string;
  email: string;
  provider: string;
  phoneNumber: string;
  orders: Orders[];
  address?: string;
  city?: string;
  createdAt: string;
}
