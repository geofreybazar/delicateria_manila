import { useMutation } from "@tanstack/react-query";
import { CreateCheckoutSession } from "@/actions/checkoutSession";

const useCreateCheckOutSession = () => {
  const {
    mutateAsync: createCheckout,
    isPending: isPendingCreateCheckout,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: CreateCheckoutSession,
  });
  return { createCheckout, isPendingCreateCheckout, isError, error, isSuccess };
};

export default useCreateCheckOutSession;
