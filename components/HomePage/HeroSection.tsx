import ShopNowButton from "../Buttons/ShopNowButton";
import SignUpNowButton from "../Buttons/SignUpNowButton";
import { title, paragraph } from "@/lib/fonts/fonts";

const HeroSection = () => {
  return (
    <div className='w-full h-screen bg-hero flex items-center'>
      <div className='flex flex-col gap-4 justify-center text-offwhite mx-4 md:mx-12 xl:mx-36 2xl:mx-52'>
        <p
          className={`lg:w-[560px]  text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold ${title.className}`}
        >
          Indulge in the Finest Gourmet Meats
        </p>
        <p
          className={`lg:w-[580px] text-center lg:text-left text-lg md:text-xl ${paragraph.className}`}
        >
          Discover a world of premium imported meats that elevate your culinary
          experience. From succulent steaks to artisanal sausages, we bring the
          best of gourmet flavours to your table.
        </p>
        <div className='w-full flex justify-center lg:block gap-3'>
          <ShopNowButton /> <SignUpNowButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
