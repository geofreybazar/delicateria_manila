import { GetProducts } from "@/actions/products";
import { GetCollectionName } from "@/actions/collections";
import ProductsList from "./ProductsList";
import Link from "next/link";

interface ProductsItemsProps {
  filters: string[];
  page: number;
}

const ProductsItems: React.FC<ProductsItemsProps> = async ({
  filters,
  page,
}) => {
  const filterNames = await Promise.all(
    filters.map((filter) => GetCollectionName(filter))
  );

  const products = await GetProducts(filters, page);

  return (
    <div className='flex-1'>
      <div className='flex flex-wrap items-center gap-2 text-gray-500 mb-5 overflow-x-auto'>
        {filterNames.length > 0 && (
          <>
            <span>Filtered by:</span>
            {filterNames?.map((item) => (
              <span
                key={item.id}
                className='border rounded-md px-2 py-1 bg-off-white'
              >
                {item.name}
              </span>
            ))}

            <Link
              href={"/shop"}
              className='border rounded-md px-2 py-1 bg-off-white'
            >
              <span className='text-blue-500 cursor-pointer'>
                clear filters
              </span>
            </Link>
          </>
        )}
      </div>

      {products.products.length === 0 && (
        <div className='flex items-center justify-center  bg-gray-200 animate-pulse rounded-md'>
          <p className='text-gray-500'>No products found</p>
        </div>
      )}
      <ProductsList products={products.products} />
    </div>
  );
};

export default ProductsItems;
