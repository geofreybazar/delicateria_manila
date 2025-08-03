import { Suspense } from "react";
import { GetCollections } from "@/actions/collections";
import ProductsFallback from "./ProductsItems/ProductsFallback";
import ProductsItems from "./ProductsItems/ProductsItems";
import Filter from "./Filter/Filter";

type SearchParams = {
  [key: string]: string | string[] | undefined;
  page?: string;
};

const Shop = async ({ searchParams }: { searchParams: SearchParams }) => {
  const collections = await GetCollections();
  const page = parseInt(searchParams.page || "1", 10);
  const { filter } = searchParams;

  const filters = Array.isArray(filter) ? filter : filter ? [filter] : [];
  return (
    <div className='flex gap-4 w-full'>
      <Filter collections={collections} />
      <Suspense fallback={<ProductsFallback />}>
        <ProductsItems filters={filters} page={page} />
      </Suspense>
    </div>
  );
};

export default Shop;
