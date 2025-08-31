"use client";

import { Products } from "@/lib/types/products";
import ImageComponent from "./ImageComponent";
import SideCart from "@/components/Cart/SideCart";

import Drawer from "@mui/material/Drawer";

import { useSideCartStore } from "@/lib/store/sideCartStore";

interface ProductsListProps {
  products: Products[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const open = useSideCartStore((state) => state.open);
  const setOpen = useSideCartStore((state) => state.setOpen);
  const handleOpenCart = () => setOpen(true);
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <ImageComponent product={product} handleOpenCart={handleOpenCart} />
        </div>
      ))}

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <SideCart />
      </Drawer>
    </div>
  );
};

export default ProductsList;
