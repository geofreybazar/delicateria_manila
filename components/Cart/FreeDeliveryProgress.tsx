import { useMemo } from "react";
import { LinearProgress } from "@mui/material";

import { formatCurrency } from "@/lib/utilities/cart";

interface FreeDeliveryProgressProps {
  totalPrice: number;
}
const FREE_DELIVERY_THRESHOLD = 5000;

const FreeDeliveryProgress: React.FC<FreeDeliveryProgressProps> = ({
  totalPrice,
}) => {
  const { percentage, balance, isFreeDelivery } = useMemo(() => {
    const percentage = Math.min(
      (totalPrice / FREE_DELIVERY_THRESHOLD) * 100,
      100
    );
    const balance = FREE_DELIVERY_THRESHOLD - totalPrice;
    const isFreeDelivery = balance <= 0;

    return { percentage, balance, isFreeDelivery };
  }, [totalPrice]);

  return (
    <div className='p-4 bg-ashBlack text-offwhite flex flex-col gap-3'>
      <p className='text-lg text-center font-medium'>
        {isFreeDelivery
          ? "🎉 Congratulations! You have free shipping!"
          : `You're ₱${formatCurrency(balance)} away from free shipping!`}
      </p>
      <div className='space-y-1'>
        <LinearProgress
          variant='determinate'
          value={percentage}
          color='customorange'
          className='h-2 rounded-full'
        />
      </div>
    </div>
  );
};
export default FreeDeliveryProgress;
