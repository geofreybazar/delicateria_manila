import { GetCheckoutSession } from "@/actions/checkoutSession";
import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
import Header from "@/components/CheckoutPage/Header";

import { title } from "@/lib/fonts/fonts";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const session = await GetCheckoutSession(id);

  return (
    <div className='h-screen flex flex-col w-full'>
      <Header />
      <div className='flex-1 flex flex-col px-12 xl:px-36 2xl:px-52 py-5 overflow-y-auto '>
        <h1 className={`${title.className} text-2xl`}>Checkout</h1>
        <div className='flex-1 w-full flex gap-10 overflow-y-auto'>
          <CheckoutPage session={session} />
        </div>
      </div>
    </div>
  );
};

export default page;
