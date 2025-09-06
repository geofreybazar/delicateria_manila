"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { useQueryClient } from "@tanstack/react-query";
import useGetCart from "@/hooks/cart/useGetCart";
import useAddQuantity from "@/hooks/cart/useAddQuantity";
import useMinusQuantity from "@/hooks/cart/useMinusQuantity";
import useRemoveItem from "@/hooks/cart/useRemoveItem";
import useCreateCheckOutSession from "@/hooks/checkOutSession/useCreateCheckOutSession";
import { useSideCartStore } from "@/lib/store/sideCartStore";

import LoadingCart from "./LoadingCart";
import CartItems from "./CartItems";
import FreeDeliveryProgress from "./FreeDeliveryProgress";
import EmptyCart from "./EmptyCart";
import { ReturnedCart } from "@/lib/types/cart";

import { Button } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";

const FREEDELIVERYPRICE = 5000;

const SideCart = () => {
  const { data: session } = useSession();

  const queryClient = useQueryClient();
  const router = useRouter();
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
  const { createCheckout, isPendingCreateCheckout } =
    useCreateCheckOutSession();

  const updateCartOptimistically = useCallback(
    (updater: (oldData: ReturnedCart) => ReturnedCart) => {
      queryClient.setQueryData(["cart", cartId], updater);
    },
    [queryClient, cartId]
  );

  if (!cartId || !cart || cartItemsIsLoading) {
    return <LoadingCart />;
  }

  const cartItems = cart.items;

  const balance = FREEDELIVERYPRICE - cart.totalPrice;

  const handleCreateCheckoutSession = async () => {
    const items = cart?.items.map((item) => ({
      productid: item.productid.id,
      name: item.productid.name,
      quantity: item.quantity,
      price: item.productid.price,
      imgUrl: item.productid.images[0]?.url,
      description: item.productid.description,
    }));

    try {
      const session = await createCheckout({
        cartId: cart.id,
        items,
        isFreeDelivery: balance <= 0,
        totalPrice: cart.totalPrice,
      });

      if (session.message) {
        localStorage.removeItem("cartId");

        Swal.fire({
          title: session.title,
          text: session.message,
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

        return;
      }

      if (!session || !session.id) {
        throw new Error("Failed to create checkout session");
      }

      setOpen(false);
      router.push(`/checkout/${session.id}`);
    } catch (error: unknown) {
      let errorMessage = "Something went wrong";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setErrorMessage(errorMessage);
    }
  };

  const handleAddQuantity = async (productId: string) => {
    updateCartOptimistically((oldData: ReturnedCart) => {
      if (!oldData) return oldData;

      // Find the item to get its price for total calculation
      const itemToUpdate = oldData.items.find(
        (item) => item.productid.id === productId
      );
      if (!itemToUpdate) return oldData; // Safety check

      return {
        ...oldData,
        items: oldData.items.map((item) =>
          item.productid.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalPrice: oldData.totalPrice + itemToUpdate.productid.price,
      };
    });

    try {
      const data = {
        cartId: cart.id,
        productId,
      };
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
    }
  };

  const handleMinusQuantity = async (productId: string) => {
    updateCartOptimistically((oldData: ReturnedCart) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        items: oldData.items.map((item) =>
          item.productid.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalPrice:
          oldData.totalPrice -
          (oldData.items.find((item) => item.productid.id === productId)
            ?.productid.price || 0),
      };
    });

    try {
      const data = {
        cartId: cart.id,
        productId,
      };
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
    }
  };

  const handleRemoveItem = async (productId: string) => {
    updateCartOptimistically((oldData: ReturnedCart) => {
      if (!oldData) return oldData;

      const itemToRemove = oldData.items.find(
        (item) => item.productid.id === productId
      );
      const priceToSubtract = itemToRemove
        ? itemToRemove.productid.price * itemToRemove.quantity
        : 0;

      return {
        ...oldData,
        items: oldData.items.filter((item) => item.productid.id !== productId),
        totalPrice: oldData.totalPrice - priceToSubtract,
      };
    });

    try {
      const data = {
        cartId: cart.id,
        productId,
      };

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

          <FreeDeliveryProgress totalPrice={cart.totalPrice} />

          <div className='px-5 text-ashBlack flex-1 flex flex-col gap-4 my-4 overflow-y-auto'>
            <CartItems
              cartItems={cartItems}
              handleMinusQuantity={handleMinusQuantity}
              isPendingMinusQuantity={isPendingMinusQuantity}
              handleAddQuantity={handleAddQuantity}
              isPendingAddQuantity={isPendingAddQuantity}
              handleRemoveItem={handleRemoveItem}
              isPendingRemoveItem={isPendingRemoveItem}
            />
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
              loading={isPendingCreateCheckout}
              disabled={isPendingCreateCheckout}
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
