import { getServerSession } from "next-auth/next";
import { GetClientUser } from "@/actions/clientUser";
import { redirect } from "next/navigation";

import Form from "@/components/MyProfile/account/Form";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user.email;

  if (!email) {
    redirect("/");
  }

  const clientUser = await GetClientUser(session?.user.email);

  return (
    <div className='w-full py-2'>
      <Form clientUser={clientUser} />
    </div>
  );
};

export default page;
