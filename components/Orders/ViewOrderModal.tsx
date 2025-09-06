import { useMemo } from "react";
import Image from "next/image";

import useGetOrder from "@/hooks/order/useGetOrder";
import OrderLoadingSkeleton from "./OrderLoadingSkeleton";

const ViewOrderModal = ({
  selectedOrder,
}: {
  selectedOrder: string | null;
}) => {
  const { order, isLoading, isError } = useGetOrder(selectedOrder);

  const subTotal = useMemo(() => {
    if (!order?.itemsOrdered) return 0;
    return order.itemsOrdered.reduce(
      (sum, item) => sum + (item.amount * item.quantity) / 100,
      0
    );
  }, [order]);

  if (isLoading || !order) {
    return <OrderLoadingSkeleton />;
  }

  if (isError) {
    return (
      <div className='p-6 text-center text-red-600'>
        Something went wrong. Please try again.
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-blue-100 text-blue-800";
      case "for delivery":
        return "bg-indigo-100 text-indigo-800";
      case "ongoing delivery":
        return "bg-purple-100 text-purple-800";
      case "for pickup":
        return "bg-orange-100 text-orange-800";
      case "picked up":
        return "bg-teal-100 text-teal-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='w-full p-4 md:p-6 pb-4 border-b border-gray-200 bg-gray-50 rounded-t-xl'>
        <div>
          <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-1'>
            Order Details
          </h2>
          <p className='text-gray-600 text-xs md:text-sm mb-3 break-all'>
            Order #{order?.referenceNumber}
          </p>
          <div className='flex flex-wrap items-center gap-2 md:gap-4'>
            <span
              className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium uppercase ${getStatusColor(
                order.orderStatus
              )}`}
            >
              {order.orderStatus}
            </span>
            <span className='text-gray-600 text-xs md:text-sm'>
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className='py-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6'>
          {/* Left Column - Items & Summary */}
          <div className='lg:col-span-2'>
            <h3 className='text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4'>
              Items Ordered
            </h3>

            {/* Items List */}
            <div className='bg-white border border-gray-200 rounded-lg divide-y divide-gray-200 max-h-[300px] md:max-h-none overflow-y-auto'>
              {order?.itemsOrdered.map((item) => (
                <div
                  key={item._id}
                  className='p-3 md:p-4 flex items-center gap-3'
                >
                  <div className='w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-lg flex items-center justify-center relative flex-shrink-0'>
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className='object-contain'
                      priority
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h4 className='font-semibold text-gray-900 text-sm md:text-base truncate'>
                      {item.name}
                    </h4>
                    <p className='text-gray-600 text-xs md:text-sm mb-1 md:mb-2 truncate'>
                      description
                    </p>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600 text-xs md:text-sm'>
                        Qty: {item.quantity}
                      </span>
                      <span className='font-semibold text-orange-600 text-sm md:text-lg'>
                        ₱{" "}
                        {new Intl.NumberFormat("en-PH", {
                          minimumFractionDigits: 2,
                        }).format(item.amount / 100)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className='bg-white border border-gray-200 rounded-lg p-4 md:p-5 mt-4 md:mt-5'>
              <h3 className='text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4'>
                Order Summary
              </h3>
              <div className='space-y-2 text-sm md:text-base'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Subtotal:</span>
                  <span className='text-gray-900'>
                    ₱{" "}
                    {new Intl.NumberFormat("en-PH", {
                      minimumFractionDigits: 2,
                    }).format(subTotal)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Shipping:</span>
                  <span className='text-green-600 font-medium'>
                    ₱{" "}
                    {new Intl.NumberFormat("en-PH", {
                      minimumFractionDigits: 2,
                    }).format(order.deliveryFee)}
                  </span>
                </div>
                <div className='border-t border-gray-200 pt-2 md:pt-3 mt-2 md:mt-3'>
                  <div className='flex justify-between'>
                    <span className='text-sm md:text-lg font-semibold text-gray-900'>
                      Total:
                    </span>
                    <span className='text-sm md:text-lg font-semibold text-orange-600'>
                      ₱{" "}
                      {new Intl.NumberFormat("en-PH", {
                        minimumFractionDigits: 2,
                      }).format(order.totalClientPaid)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Information */}
          <div className='space-y-4'>
            {/* Delivery Information */}
            <div className='bg-white border border-gray-200 rounded-lg p-4 md:p-5'>
              <h3 className='text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4'>
                Delivery Info
              </h3>
              <div className='space-y-2 md:space-y-3 text-sm md:text-base'>
                <div>
                  <p className='text-gray-600 text-xs md:text-sm mb-1'>
                    Shipping Address
                  </p>
                  <div className='text-gray-900 text-xs md:text-sm leading-relaxed'>
                    <p>{order.customerDetails.name}</p>
                    <p>{order.deliveryAddress.line1}</p>
                    <p>
                      {order.deliveryAddress.city},{" "}
                      {order.deliveryAddress.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className='bg-white border border-gray-200 rounded-lg p-4 md:p-5'>
              <h3 className='text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4'>
                Payment Info
              </h3>
              <div className='space-y-2 md:space-y-3 text-sm md:text-base'>
                <div>
                  <p className='text-gray-600 text-xs md:text-sm mb-1'>
                    Payment Method
                  </p>
                  <p className='text-gray-900 text-xs md:text-sm'>
                    Payment using {order.paymentMethod.paymentType}{" "}
                    {order.paymentMethod.paymentBrand} ending with *******
                    {order.paymentMethod.paymentLast4}
                  </p>
                </div>
                <div>
                  <p className='text-gray-600 text-xs md:text-sm mb-1'>
                    Payment Status
                  </p>
                  <span className='px-2 md:px-3 py-1 bg-green-100 text-green-800 rounded-full text-[10px] md:text-xs font-medium'>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderModal;
