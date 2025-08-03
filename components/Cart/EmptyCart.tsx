import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className='w-[520px] h-full flex flex-col items-center justify-center text-center p-6 gap-6'>
      <FaShoppingCart size={80} className='text-gray-400' />
      <h2 className='text-2xl font-semibold'>Your Cart is Empty</h2>
      <p className='text-gray-500 text-sm'>
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link
        href='/shop'
        className='bg-customOrange hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition duration-200'
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
