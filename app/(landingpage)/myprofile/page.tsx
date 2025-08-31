import { Suspense } from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import MyProfile from "@/components/MyProfile/MyProfile";
import MyProfileLoadingFallback from "@/components/MyProfile/MyProfileLoadingFallback";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user.email;

  if (!email) {
    redirect("/");
  }

  return (
    <div className='w-full'>
      <Suspense fallback={<MyProfileLoadingFallback />}>
        <MyProfile email={email} />
      </Suspense>
    </div>
  );
};

export default page;
