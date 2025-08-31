"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { useQueryClient } from "@tanstack/react-query";
import useGetCart from "@/hooks/cart/useGetCart";
import useAddQuantity from "@/hooks/cart/useAddQuantity";
import useMinusQuantity from "@/hooks/cart/useMinusQuantity";
import useRemoveItem from "@/hooks/cart/useRemoveItem";

import { CreateCheckoutSession } from "@/actions/checkoutSession";

import LoadingCart from "./LoadingCart";
import EmptyCart from "./EmptyCart";

import { useSideCartStore } from "@/lib/store/sideCartStore";

import { Button, LinearProgress } from "@mui/material";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const FREEDELIVERYPRICE = 5000;

const SideCart = () => {
  const { data: session } = useSession();

  const queryClient = useQueryClient();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const setOpen = useSideCartStore((state) => state.setOpen);
  const [errorMessage, setErrorMessage] = useState("");
  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      setCartId(session.user.id);
      return;
    } else {
      const storedCartId = localStorage.getItem("cartId");
      setCartId(storedCartId);
      return;
    }
  }, [session]);

  const { cart, cartItemsIsLoading } = useGetCart(cartId);
  const { addQuantity, isPendingAddQuantity } = useAddQuantity();
  const { minusQuantity, isPendingMinusQuantity } = useMinusQuantity();
  const { removeItem, isPendingRemoveItem } = useRemoveItem();

  if (!cartId || !cart || cartItemsIsLoading) {
    return <LoadingCart />;
  }

  const cartItems = cart.items;

  const freeDelivery = Math.min(
    (cart.totalPrice / FREEDELIVERYPRICE) * 100,
    100
  );

  const balance = FREEDELIVERYPRICE - cart.totalPrice;

  const handleCreateCheckoutSession = async () => {
    const items = cart.items.map((item) => {
      return {
        productid: item.productid.id,
        name: item.productid.name,
        quantity: item.quantity,
        price: item.productid.price,
        imgUrl: item.productid.images[0]?.url,
      };
    });

    setIsLoading(true);

    try {
      const session = await CreateCheckoutSession({
        cartId: cart.id,
        items,
        isFreeDelivery: balance <= 0,
        totalPrice: cart.totalPrice,
      });

      if (session.message) {
        localStorage.removeItem("cartId");
        setIsLoading(false);

        Swal.fire({
          title: "Cart Session Expired!",
          text: "Your cart session has expired. Please try adding the items again.",
          icon: "info",
        }).then(() => {
          window.location.reload();
        });

        return;
      }

      if (session.itemsNoStock) {
        const errorMessage = session.message
          ? session.message
          : "Some items are out of stock. Refresh to update";
        setErrorMessage(errorMessage);

        setIsLoading(false);
        return;
      }

      if (!session || !session.id) {
        throw new Error("Failed to create checkout session");
      }

      setIsLoading(false);
      setOpen(false);
      router.push(`/checkout/${session.id}`);
    } catch (error: unknown) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setErrorMessage(errorMessage);
      setIsLoading(false);
    }
  };

  const handleAddQuantity = async (productId: string) => {
    const data = {
      cartId: cart.id,
      productId,
    };
    try {
      const addQuantityFunction = await addQuantity(data);
      await queryClient.invalidateQueries({ queryKey: ["cart", cartId] });
      if (addQuantityFunction.message) {
        Swal.fire({
          title: "Maximum quantity reached!",
          text: addQuantityFunction.message,
          icon: "info",
        });
      }
    } catch (error) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setErrorMessage(errorMessage);
      setIsLoading(false);
    }
  };

  const handleMinusQuantity = async (productId: string) => {
    const data = {
      cartId: cart.id,
      productId,
    };
    try {
      const minusQuantityFunction = await minusQuantity(data);
      await queryClient.invalidateQueries({ queryKey: ["cart", cartId] });
      if (minusQuantityFunction.message) {
        Swal.fire({
          title: "Minimum quantity reached!",
          text: minusQuantityFunction.message,
          icon: "info",
        });
      }
    } catch (error) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setErrorMessage(errorMessage);
      setIsLoading(false);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    const data = {
      cartId,
      productId,
    };
    try {
      const removeItemFunction = await removeItem(data);
      await queryClient.invalidateQueries({ queryKey: ["cart", cartId] });
      if (removeItemFunction.message) {
        Swal.fire({
          title: "Something went wrong!",
          text: removeItemFunction.message,
          icon: "info",
        });
      }
    } catch (error) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setErrorMessage(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className='w-screen sm:max-w-[420px] md:max-w-[520px] h-full'>
      {!cartItems || cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className='w-screen sm:max-w-[420px] md:max-w-[520px] h-full flex flex-col justify-between'>
          <div className='px-4 py-3 text-xl sm:text-2xl flex justify-between items-center text-offwhite bg-ashBlack'>
            <p>Your Cart</p>
            <IoMdCloseCircle
              className='cursor-pointer'
              onClick={() => setOpen(false)}
            />
          </div>

          <div className='p-2 bg-ashBlack text-offwhite flex flex-col gap-2'>
            <p className='text-lg text-center'>
              {balance <= 0
                ? "Congratulations! You have free shipping!"
                : `You're ₱${new Intl.NumberFormat("en-PH", {
                    minimumFractionDigits: 2,
                  }).format(balance)} away from free shipping!`}
            </p>
            <LinearProgress
              variant='determinate'
              value={freeDelivery}
              color='customorange'
            />
          </div>

          <div className='px-5 text-ashBlack flex-1 flex flex-col gap-4 my-4 overflow-y-auto'>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className='grid grid-cols-2 sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-5 p-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
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
                      <button
                        onClick={() => handleMinusQuantity(item.productid.id)}
                        disabled={isPendingMinusQuantity}
                        className={`rounded ${
                          isPendingMinusQuantity
                            ? "px-2 opacity-50 cursor-not-allowed bg-gray-300 "
                            : "p-2 cursor-pointer hover:bg-gray-100"
                        }`}
                      >
                        {isPendingMinusQuantity ? (
                          <span className='w-4 h-4 border-2 border border-t-transparent rounded-full animate-spin inline-block' />
                        ) : (
                          <HiMiniMinus />
                        )}
                      </button>

                      {item.quantity}
                      <button
                        onClick={() => handleAddQuantity(item.productid.id)}
                        disabled={isPendingAddQuantity}
                        className={`rounded ${
                          isPendingAddQuantity
                            ? "px-2 opacity-50 cursor-not-allowed bg-gray-300 "
                            : "p-2 cursor-pointer hover:bg-gray-100"
                        }`}
                      >
                        {isPendingAddQuantity ? (
                          <span className='w-4 h-4 border-2 border border-t-transparent rounded-full animate-spin inline-block' />
                        ) : (
                          <HiMiniPlus />
                        )}
                      </button>
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
                        <span className='w-4 h-4 border-2 border border-t-transparent rounded-full animate-spin inline-block' />
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
          </div>

          <div className='px-5 pb-4 flex flex-col gap-2'>
            {errorMessage && (
              <p className='text-center text-red-500'>{errorMessage}</p>
            )}
            <div>
              <div className='flex justify-between text-lg font-semibold'>
                <p>Estimated Total</p>
                <p>
                  ₱
                  {new Intl.NumberFormat("en-PH", {
                    minimumFractionDigits: 2,
                  }).format(cart.totalPrice)}
                </p>
              </div>
              <div className='text-sm text-gray-500'>
                <p>*Taxes and shipping calculated at checkout.</p>
              </div>
            </div>
            <Button
              fullWidth
              variant='contained'
              color='customorange'
              size='large'
              loading={isLoading}
              disabled={isLoading}
              onClick={handleCreateCheckoutSession}
            >
              Proceed to Checkout ₱
              {new Intl.NumberFormat("en-PH", {
                minimumFractionDigits: 2,
              }).format(cart.totalPrice)}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideCart;
