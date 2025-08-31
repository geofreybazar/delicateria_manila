import { Suspense } from "react";
import { GetCollections } from "@/actions/collections";
import ProductsFallback from "./ProductsItems/ProductsFallback";
import ProductsItems from "./ProductsItems/ProductsItems";
import ShopLayout from "./ShopLayout";

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
    <>
      <ShopLayout collections={collections}>
        <Suspense fallback={<ProductsFallback />}>
          <ProductsItems filters={filters} page={page} />
        </Suspense>
      </ShopLayout>
    </>
  );
};

export default Shop;
