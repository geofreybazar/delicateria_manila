import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { GetClientUser } from "@/actions/clientUser";

import OrdersTable from "@/components/Orders/OrdersTable";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user.email;

  if (!email) {
    redirect("/");
  }

  const user = await GetClientUser(email);

  if (!user?.orders || user.orders.length === 0) {
    return <div className='text-center mt-10'>No orders found</div>;
  }

  return (
    <div className='w-full shadow-md border border-gray-200 max-h-78 overflow-auto'>
      <OrdersTable orders={user.orders} />
    </div>
  );
};

export default page;
