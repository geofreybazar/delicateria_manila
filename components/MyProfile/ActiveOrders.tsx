import { Orders } from "@/lib/types/auth";

const ActiveOrders = ({ orders }: { orders: Orders[] }) => {
  console.log(orders);
  return <div>activeOrders</div>;
};

export default ActiveOrders;
