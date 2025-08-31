import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Badge, CircularProgress } from "@mui/material";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

import useGetCart from "@/hooks/cart/useGetCart";

interface ShopIconProps {
  handleOpenCart: () => void;
}

const ShopIcon: React.FC<ShopIconProps> = ({ handleOpenCart }) => {
  const { data: session } = useSession();
  const [cartId, setCartId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateCartId = () => {
      if (session) {
        setCartId(session.user.id);
      } else {
        const storedCartId = localStorage.getItem("cartId");
        setCartId(storedCartId);
      }
    };

    updateCartId();

    window.addEventListener("storage", updateCartId);

    return () => {
      window.removeEventListener("storage", updateCartId);
    };
  }, [session]);

  const { cart, cartItemsIsLoading } = useGetCart(cartId);

  if (!isClient) return null;

  if (cartItemsIsLoading) {
    return (
      <p className='animate-pulse'>
        <CircularProgress
          size={30}
          thickness={4.5}
          style={{ color: "#F18B21" }}
        />
      </p>
    );
  }

  if (!cartId || !cart) {
    return <PiShoppingCartSimpleFill />;
  }

  const cartItems = cart.items;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {totalItems > 0 ? (
        <Badge
          badgeContent={totalItems}
          color='customorange'
          className='cursor-pointer'
          onClick={() => handleOpenCart()}
        >
          <PiShoppingCartSimpleFill />
        </Badge>
      ) : (
        <PiShoppingCartSimpleFill />
      )}
    </>
  );
};

export default ShopIcon;
