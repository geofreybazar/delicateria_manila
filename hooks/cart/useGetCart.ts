import { useQuery } from "@tanstack/react-query";
import { GetCart } from "@/actions/cart";

const useGetCart = (id: string | null) => {
  const {
    data: cart,
    isLoading: cartItemsIsLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => GetCart(id),
    enabled: !!id,
  });

  return { cart, cartItemsIsLoading, isError, error };
};

export default useGetCart;
