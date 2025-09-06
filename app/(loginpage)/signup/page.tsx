import { Suspense } from "react";
import SignupPage from "@/components/SignupPage/SignupPage";
import LoadingFallback from "@/components/SignupPage/LoadingFallback";

const page = () => {
  return (
    <div className='h-full'>
      <Suspense fallback={<LoadingFallback />}>
        <SignupPage />
      </Suspense>
    </div>
  );
};

export default page;
