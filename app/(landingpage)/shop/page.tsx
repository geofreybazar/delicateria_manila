import { Suspense } from "react";
import Shop from "@/components/ShopPage/Shop";
import ShopFallBack from "@/components/ShopPage/ShopFallBack";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ShopPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className='lg:flex-row text-ashBlack mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-10'>
      <Suspense fallback={<ShopFallBack />}>
        <Shop searchParams={await searchParams} />
      </Suspense>
    </div>
  );
};

export default ShopPage;
