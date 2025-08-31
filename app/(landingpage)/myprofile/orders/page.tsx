import { getServerSession } from "next-auth/next";
import { GetClientUser } from "@/actions/clientUser";

import OrdersTable from "@/components/Orders/OrdersTable";
import { title } from "@/lib/fonts/fonts";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user.email;

  if (!email) return <div>No Email Found</div>;

  const user = await GetClientUser(email);

  if (!user?.orders || user.orders.length === 0) {
    return <div className='text-center mt-10'>No orders found</div>;
  }

  return (
    <div className='w-full p-6'>
      <p className={`${title.className} text-xl pt-2 pb-5`}>Order History</p>
      <OrdersTable orders={user.orders} />
    </div>
  );
};

export default page;
