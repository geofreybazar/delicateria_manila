import { ReturnedCheckoutSession } from "@/lib/types/checkoutSession";
import TotalFee from "./TotalFee";
import Image from "next/image";

interface PaymentDetailsProps {
  session: ReturnedCheckoutSession;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ session }) => {
  const items = session.items || [];

  return (
    <div className='h-full flex flex-col gap-4 '>
      <div className='overflow-y-auto'>
        <div className='w-full text-lg  grid grid-cols-3 justify-between items-center py-2 border-b'>
          <div>Product</div>
          <div className='flex justify-center'>Quantity</div>
          <div className='flex justify-end'>Total</div>
        </div>

        {items.map((item) => {
          const total = item.price * item.quantity;
          return (
            <div
              key={item._id}
              className='w-full grid grid-cols-3 justify-between items-center py-2 '
            >
              <div className='flex items-center gap-4'>
                <div className='relative h-16 w-1/2'>
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    fill
                    className='object-cover rounded-md'
                    priority
                    sizes='(max-width: 768px) 100vw, 25vw'
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
              <div className='text-center'>{item.quantity}</div>
              <div className='text-right'>
                ₱
                {total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className=' '>
        <TotalFee session={session} />
      </div>
    </div>
  );
};

export default PaymentDetails;
