"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  deliveryDetailsSchema,
  DeliveryDetailsType,
} from "@/lib/validation/checkoutFormValidation";

import { useCartStore } from "@/lib/store/cartStore";
import DeliveryDetails from "./DeliveryDetails";
import PaymentDetails from "./PaymentDetails";
import { ReturnedCheckoutSession } from "@/lib/types/checkoutSession";
import { useCityStore } from "@/lib/store/selectedCityStore";

import { CreatePaymentRequest } from "@/actions/checkoutSession";

interface CheckoutPageProps {
  session: ReturnedCheckoutSession;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ session }) => {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const selectedCityState = useCityStore((state) => state.selectedCityState);

  useEffect(() => {
    if (session.status === "expired") {
      localStorage.removeItem("cart-storage");
      alert("Your cart session expired. Please start checkout again.");
      clearCart();
      router.replace("/shop");
    }
  }, [session.status, clearCart, router]);

  const methods = useForm<DeliveryDetailsType>({
    resolver: zodResolver(deliveryDetailsSchema),
    defaultValues: {
      city: "",
    },
  });

  const { handleSubmit } = methods;

  if (session.status === "expired") {
    return null;
  }

  const onSubmit = async (data: DeliveryDetailsType) => {
    const shippingFee = session.isFreeDelivery
      ? 0
      : selectedCityState.shippingFee;

    const checkOutSessionPayload = {
      ...data,
      shippingFee,
      items: session.items,
      sessionId: session.id,
      cartId: session.cartId,
    };

    try {
      const response = await CreatePaymentRequest(checkOutSessionPayload);
      if (typeof response === "string") {
        window.location.href = response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className='flex h-full w-full gap-10 h-fit'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-1/2 h-full py-2'>
          <DeliveryDetails />
        </div>
        <div className='w-1/2 h-full py-2'>
          <PaymentDetails session={session} />
        </div>
      </form>
    </FormProvider>
  );
};

export default CheckoutPage;
