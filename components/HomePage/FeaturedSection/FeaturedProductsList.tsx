"use client";

import Image from "next/image";

import AddToCartButton from "@/components/Buttons/AddToCartButton";

import { Products } from "@/lib/types/products";

import { Drawer } from "@mui/material";

import { useSideCartStore } from "@/lib/store/sideCartStore";
import SideCart from "@/components/Cart/SideCart";

interface FeaturedProductsListProps {
  feauredProducts: Products[];
}

const FeaturedProductsList: React.FC<FeaturedProductsListProps> = ({
  feauredProducts,
}) => {
  const open = useSideCartStore((state) => state.open);
  const setOpen = useSideCartStore((state) => state.setOpen);

  const handleOpenCart = () => setOpen(true);

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5'>
      {feauredProducts.map((product) => (
        <div
          key={product.id}
          className='flex flex-col border border-black shadow-md'
        >
          <div className='relative group bg-black h-40 md:h-[250px] w-full overflow-hidden'>
            <Image
              src={product.images[0]?.url || "/fallback.jpg"}
              alt={product.description || "Product image"}
              fill
              className='object-cover group-hover:opacity-30 transition-opacity duration-300'
              sizes='(max-width: 768px) 100vw, 25vw'
              priority
            />
            <div className='absolute inset-0 flex flex-col gap-5 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
              <AddToCartButton
                size='large'
                product={product}
                handleOpenCart={handleOpenCart}
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-2 justify-between bg-offwhite p-2 md:p-4 font-semibold text-xs md:text-lg'>
            <div>
              <p>{product.name}</p>
              <p>
                ₱
                {new Intl.NumberFormat("en-PH", {
                  minimumFractionDigits: 2,
                }).format(product.price)}
              </p>
            </div>
            <div className='w-full h-full flex flex-col justify-center gap-2 lg:hidden'>
              <AddToCartButton
                size='small'
                product={product}
                handleOpenCart={handleOpenCart}
              />
            </div>
          </div>
        </div>
      ))}

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <SideCart />
      </Drawer>
    </div>
  );
};

export default FeaturedProductsList;
