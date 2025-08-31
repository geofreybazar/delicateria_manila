import { getServerSession } from "next-auth/next";
import { GetClientUser } from "@/actions/clientUser";

import Form from "@/components/MyProfile/account/Form";
import { title } from "@/lib/fonts/fonts";

const page = async () => {
  const session = await getServerSession();
  const clientUser = await GetClientUser(session?.user.email);

  return (
    <div className='w-full'>
      <p className={`${title.className} text-xl pt-2 pb-5`}>My Account</p>
      <Form clientUser={clientUser} />
    </div>
  );
};

export default page;
