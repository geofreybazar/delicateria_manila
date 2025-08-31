"use client";

import { useSession } from "next-auth/react";

import { AddToCart, ClientUserAddToCart } from "@/actions/cart";
import { Button } from "@mui/material";
import { Products } from "@/lib/types/products";
import { AddItemToCart } from "@/actions/cart";
import { useQueryClient } from "@tanstack/react-query";

type SizeType = "small" | "medium" | "large" | undefined;

interface AddToCartButtonProps {
  handleOpenCart: () => void;
  product: Products;
  size: SizeType;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  handleOpenCart,
  product,
  size,
}) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const handleAddToCart = async () => {
    if (session) {
      const data = {
        userId: session.user.id,
        productId: product.id,
      };
      await ClientUserAddToCart(data);
      await queryClient.invalidateQueries({
        queryKey: ["cart", session.user.id],
      });

      handleOpenCart();
      return;
    } else {
      const cartId = localStorage.getItem("cartId");
      if (cartId) {
        try {
          const data = {
            cartId,
            productId: product.id,
          };
          await AddItemToCart(data);
          await queryClient.invalidateQueries({ queryKey: ["cart", cartId] });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const newCart = await AddToCart(product.id);
          localStorage.setItem("cartId", newCart.id);
          window.dispatchEvent(new Event("storage"));
        } catch (error) {
          console.log(error);
        }
      }
      handleOpenCart();
      return;
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      color='customorange'
      variant='contained'
      loadingPosition='start'
      size={size}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
