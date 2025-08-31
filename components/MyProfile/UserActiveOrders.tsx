"use client";

import { useMemo } from "react";
import { Orders } from "@/lib/types/auth";
import ShopNowButton from "../Buttons/ShopNowButton";

const UserActiveOrders = ({ orders }: { orders: Orders[] }) => {
  const activeOrders = useMemo(
    () =>
      orders.filter(
        (order) =>
          order.orderStatus !== "picked up" && order.orderStatus !== "delivered"
      ),
    [orders]
  );

  return (
    <div className='p-2'>
      {activeOrders.length > 0 ? (
        <ul>
          {activeOrders.map((order) => (
            <li key={order.id}>{order.referenceNumber}</li>
          ))}
        </ul>
      ) : (
        <div className='w-full flex flex-col items-center gap-2'>
          <p>No Active Orders</p>
          <ShopNowButton />
        </div>
      )}
    </div>
  );
};

export default UserActiveOrders;
