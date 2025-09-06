import { useQuery } from "@tanstack/react-query";
import { GetOrder } from "@/actions/order";

const useGetOrder = (id: string | null) => {
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: () => GetOrder(id),
    enabled: !!id,
  });

  return { order, isLoading, isError, error };
};

export default useGetOrder;
