import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

import { Items } from "@/lib/types/cart";
import LoadingSpinner from "./LoadingSpinner";
import QuantityButton from "./QuantityButton";

interface CartItemsProps {
  cartItems: {
    productid: Items;
    quantity: number;
    _id: string;
  }[];
  handleMinusQuantity: (productId: string) => Promise<void>;
  isPendingMinusQuantity: boolean;
  handleAddQuantity: (productId: string) => Promise<void>;
  isPendingAddQuantity: boolean;
  handleRemoveItem: (productId: string) => Promise<void>;
  isPendingRemoveItem: boolean;
}

const CartItems: React.FC<CartItemsProps> = ({
  cartItems,
  handleMinusQuantity,
  isPendingMinusQuantity,
  handleAddQuantity,
  isPendingAddQuantity,
  handleRemoveItem,
  isPendingRemoveItem,
}) => {
  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item._id}
          className='grid grid-cols-2 sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-5 p-2 border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300'
        >
          <Image
            width={150}
            height={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            src={item.productid.images[0].url}
            alt={`Product image of ${item.productid.name}`}
            className='object-cover rounded-lg '
          />
          <div className='w-full flex flex-col'>
            <p className='text-lg font-semibold'>{item.productid.name}</p>
            <p>
              ₱
              {new Intl.NumberFormat("en-PH", {
                minimumFractionDigits: 2,
              }).format(item.productid.price)}
            </p>
            <div className='w-full flex flex-wrap items-center gap-2 text-lg sm:text-xl'>
              <div className='border rounded-md w-fit text-xl flex items-center gap-5'>
                <QuantityButton
                  onClick={() => handleMinusQuantity(item.productid.id)}
                  disabled={isPendingMinusQuantity || item.quantity <= 1}
                  isPending={isPendingMinusQuantity}
                  icon={HiMiniMinus}
                />

                {item.quantity}

                <QuantityButton
                  onClick={() => handleAddQuantity(item.productid.id)}
                  disabled={isPendingAddQuantity}
                  isPending={isPendingAddQuantity}
                  icon={HiMiniPlus}
                />
              </div>

              <button
                onClick={() => handleRemoveItem(item.productid.id)}
                disabled={isPendingRemoveItem}
                className={`rounded-full ml-4 text-red-500 hover:text-red-700 ${
                  isPendingRemoveItem
                    ? "px-2 opacity-50 cursor-not-allowed bg-gray-300 "
                    : "p-2 cursor-pointer hover:bg-gray-100"
                }`}
              >
                {isPendingRemoveItem ? (
                  <LoadingSpinner />
                ) : (
                  <FaTrash size={20} />
                )}
              </button>
            </div>
          </div>
          <div className='block sm:hidden' />
          <p className='font-semibold text-right self-start min-w-[80px]'>
            ₱
            {new Intl.NumberFormat("en-PH", {
              minimumFractionDigits: 2,
            }).format(item.productid.price * item.quantity)}
          </p>
        </div>
      ))}
    </>
  );
};

export default CartItems;
