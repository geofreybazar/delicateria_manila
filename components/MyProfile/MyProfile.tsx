import { GetClientUser } from "@/actions/clientUser";
import UserActiveOrders from "./UserActiveOrders";
import AccountInformation from "./AccountInformation";

const MyProfile = async ({ email }: { email: string }) => {
  const user = await GetClientUser(email);
  const orders = user.orders;
  return (
    <div className='pt-2 w-full flex flex-col md:flex-row justify-center gap-5'>
      <AccountInformation user={user} />
      <UserActiveOrders orders={orders} />
    </div>
  );
};

export default MyProfile;
