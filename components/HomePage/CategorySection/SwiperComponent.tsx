"use client";

import Image from "next/image";
import { ReturnedCollections } from "@/lib/types/colletions";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

interface SwiperComponentProps {
  collections: ReturnedCollections[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ collections }) => {
  return (
    <div className='relative flex items-center gap-2 w-full h-62 lg:h-96'>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={15}
        speed={2000}
        loop={true}
        slidesPerView='auto'
      >
        {collections?.map((collection) => (
          <SwiperSlide
            key={collection.id}
            style={{ width: "auto", height: "auto" }}
          >
            <div className='relative group bg-black h-62 lg:h-96 w-62 overflow-hidden rounded-xl'>
              <Image
                src={collection.image.url}
                alt={collection.description || "Product image"}
                fill
                className='object-cover opacity-30 lg:opacity-100 group-hover:opacity-30 transition-opacity duration-300 rounded-xl'
                sizes='(max-width: 768px) 100vw, 25vw'
                priority
              />
              <div className='text-white absolute inset-0 flex flex-col gap-5 items-center justify-center opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer'>
                <p className='text-3xl text-center'>{collection.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
