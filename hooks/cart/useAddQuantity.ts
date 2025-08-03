import { useMutation } from "@tanstack/react-query";
import { AddQuantity } from "@/actions/cart";

const useAddQuantity = () => {
  const {
    mutateAsync: addQuantity,
    isPending: isPendingAddQuantity,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: AddQuantity,
  });
  return { addQuantity, isPendingAddQuantity, isError, error, isSuccess };
};

export default useAddQuantity;
