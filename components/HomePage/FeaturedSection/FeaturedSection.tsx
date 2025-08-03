import { Suspense } from "react";
import ViewAllButton from "../../Buttons/ViewAllButton";
import { paragraph } from "@/lib/fonts/fonts";
import FeaturedProducts from "./FeaturedProducts";
import LoadingFallback from "./LoadingFallback";

const FeaturedSection = async () => {
  return (
    <div className='w-full bg-offwhite flex items-center py-18 lg:py-30'>
      <div className='w-full flex flex-col gap-4 justify-center text-ashBlack mx-4 md:mx-12 xl:mx-36 2xl:mx-52'>
        <div className='w-full flex flex-col md:flex-row items-center gap-4 md:justify-between'>
          <div className='text-center md:text-left'>
            <p className={`text-2xl lg:text-6xl ${paragraph.className}`}>
              Products
            </p>
            <p className='text-md lg:text-2xl'>
              Explore our premium selection of gourmet meats and more.
            </p>
          </div>
          <div>
            <div className='hidden lg:block'>
              <ViewAllButton size='large' />
            </div>
            <div className='lg:hidden'>
              <ViewAllButton size='small' />
            </div>
          </div>
        </div>
        <div>
          <Suspense fallback={<LoadingFallback />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
