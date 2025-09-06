"use client";

import { useMemo } from "react";
import { Orders } from "@/lib/types/auth";
import ShopNowButton from "../Buttons/ShopNowButton";
import { MdOutlineCalendarMonth } from "react-icons/md";

const UserActiveOrders = ({ orders }: { orders: Orders[] }) => {
  const activeOrders = useMemo(
    () =>
      orders.filter(
        (order) =>
          order.orderStatus !== "picked up" && order.orderStatus !== "delivered"
      ),
    [orders]
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className='w-full md:w-1/2 shadow-sm bg-white border border-gray-200 rounded-xl p-2 flex flex-col'>
      <div className='px-6 py-4 border-b border-gray-200 flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-gray-900'>Active Orders</h2>
      </div>

      <div className='flex-1 p-2 max-h-78 overflow-auto'>
        {activeOrders.length > 0 ? (
          <>
            <div className='divide-y divide-gray-200'>
              {activeOrders.map((order) => (
                <div
                  key={order.id}
                  className='p-6 hover:bg-gray-50 transition-colors rounded-md'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      <div>
                        <div className='flex items-center space-x-3'>
                          <h3 className='font-semibold text-gray-900'>
                            {order.referenceNumber.slice(0, 20) + "..."}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.orderStatus)}`}
                          >
                            {order.orderStatus.charAt(0).toUpperCase() +
                              order.orderStatus.slice(1)}
                          </span>
                        </div>
                        <div className='flex items-center space-x-4 mt-1 text-sm text-gray-600'>
                          <div className='flex items-center space-x-1'>
                            <MdOutlineCalendarMonth className='w-4 h-4' />
                            <span>
                              {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <span>•</span>
                          <span>{order.itemsOrdered.length} items</span>
                          <span>•</span>
                          <span className='font-medium text-gray-900'>
                            {order.totalClientPaid}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className='cursor-pointer text-orange-600 hover:text-orange-700 font-medium text-sm'>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
            <div className='text-center text-lg'>
              <p>No Active Orders</p>
              <p>Start Shopping Now!</p>
            </div>
            <ShopNowButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserActiveOrders;
