import Image from "next/image";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import BuyNowButton from "@/components/Buttons/BuyNowButton";

import { Products } from "@/lib/types/products";

interface ImageComponentProps {
  product: Products;
  handleOpenCart: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  product,
  handleOpenCart,
}) => {
  return (
    <div className='flex flex-col border border-black shadow-md h-full'>
      <div className='relative h-40 md:h-[180px] w-full overflow-hidden'>
        <Image
          src={product.images[0]?.url || "/fallback.jpg"}
          alt={product.description || "Product image"}
          fill
          className='object-cover '
          sizes='(max-width: 768px) 100vw, 25vw'
          priority
        />
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
        <div className='w-full flex flex-col justify-center gap-2 '>
          <AddToCartButton
            size='small'
            product={product}
            handleOpenCart={handleOpenCart}
          />
          <BuyNowButton size='small' />
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
