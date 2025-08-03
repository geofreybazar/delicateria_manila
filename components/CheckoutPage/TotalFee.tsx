import { useEffect } from "react";
import { useCityStore } from "@/lib/store/selectedCityStore";
import { ReturnedCheckoutSession } from "@/lib/types/checkoutSession";
import React from "react";

interface TotalFeeProps {
  session: ReturnedCheckoutSession;
}

const TotalFee: React.FC<TotalFeeProps> = ({ session }) => {
  const selectedCityState = useCityStore((state) => state.selectedCityState);
  const clearSelectedCity = useCityStore((state) => state.clearSelectedCity);

  const shippingFee = session.isFreeDelivery
    ? "Free Delivery"
    : selectedCityState.shippingFee;

  useEffect(() => {
    return () => {
      clearSelectedCity();
    };
  }, [clearSelectedCity]);

  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex justify-between items-center'>
        <p>Subtotal:</p>
        <p>
          ₱
          {session.totalPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <p>Shipping fee:</p>
        <p>
          {typeof shippingFee === "number" ? (
            <>
              ₱{" "}
              {shippingFee.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </>
          ) : (
            shippingFee
          )}
        </p>
      </div>
      <div className='flex justify-between items-center text-xl font-semibold'>
        <p>Total</p>
        <p>
          {typeof shippingFee === "number" ? (
            <>
              ₱
              {(session.totalPrice + shippingFee).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </>
          ) : (
            <>
              ₱
              {session.totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default TotalFee;
