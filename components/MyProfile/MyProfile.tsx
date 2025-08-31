import { GetClientUser } from "@/actions/clientUser";

import UserActiveOrders from "./UserActiveOrders";

const MyProfile = async ({ email }: { email: string }) => {
  const user = await GetClientUser(email);
  const orders = user.orders;
  return (
    <div className='pt-2 w-full flex flex-col sm:flex-row justify-center gap-5 '>
      <div className='w-full md:w-1/2 shadow-xl bg-offwhite text-ashBlack border border-gray-200 rounded-md p-3'>
        <p className='text-lg font-semibold pb-2'>Account</p>
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email Address: {user.email}</p>
          <p>Contact Number: {user.phoneNumber}</p>
        </div>
      </div>
      <div className='w-full md:w-1/2 shadow-xl bg-offwhite text-ashBlack border border-gray-200 rounded-md p-2'>
        <p className='text-lg font-semibold pb-2'>Active Orders</p>
        <div>
          <UserActiveOrders orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
