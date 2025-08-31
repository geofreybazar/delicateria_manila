import { Suspense } from "react";
import SignupPage from "@/components/SignupPage/SignupPage";

const page = () => {
  return (
    <div className='bg-off-white flex flex-col'>
      <Suspense fallback={<div>Loading</div>}>
        <SignupPage />
      </Suspense>
    </div>
  );
};

export default page;
