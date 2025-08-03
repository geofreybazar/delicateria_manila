import { GetCollections } from "@/actions/collections";
import { paragraph } from "@/lib/fonts/fonts";
import SwiperComponent from "./SwiperComponent";

const CategorySection = async () => {
  const collections = await GetCollections();

  return (
    <div className='w-full bg-ashBlack'>
      <div className='flex flex-col gap-4 justify-center text-offwhite mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-30'>
        <div className='w-full flex flex-col items-center justify-center gap-10'>
          <p
            className={`text-center text-xl md:text-4xl font-bold ${paragraph.className}`}
          >
            Discover the Finest Selection of Premium Quality Meats at
            Delicateria Manila
          </p>
          <SwiperComponent collections={collections} />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
