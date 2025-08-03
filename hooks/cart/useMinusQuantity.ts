import { useMutation } from "@tanstack/react-query";
import { MinusQuantity } from "@/actions/cart";

const useMinusQuantity = () => {
  const {
    mutateAsync: minusQuantity,
    isPending: isPendingMinusQuantity,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: MinusQuantity,
  });
  return { minusQuantity, isPendingMinusQuantity, isError, error, isSuccess };
};

export default useMinusQuantity;
