import { useMutation } from "@tanstack/react-query";
import { RemoveItem } from "@/actions/cart";

const useRemoveItem = () => {
  const {
    mutateAsync: removeItem,
    isPending: isPendingRemoveItem,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: RemoveItem,
  });
  return {
    removeItem,
    isPendingRemoveItem,
    isError,
    error,
    isSuccess,
  };
};

export default useRemoveItem;
