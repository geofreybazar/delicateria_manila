import { paragraph } from "@/lib/fonts/fonts";
import React from "react";
import ShopNowButton from "../Buttons/ShopNowButton";
import SignUpNowButton from "../Buttons/SignUpNowButton";

const CTASection = () => {
  return (
    <div className='w-full bg-offwhite'>
      <div className='flex flex-col lg:flex-row gap-5 justify-between items-center text-ashBlack mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-30'>
        <div className='flex flex-col text-center lg:text-left gap-5'>
          <p
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${paragraph.className}`}
          >
            Discover Gourmet Meats Today
          </p>
          <p className='text-xl md:text-2xl lg:text-2xl font-light'>
            Explore our premium selection and elevate your meals.
          </p>
        </div>
        <div className='flex gap-5'>
          <ShopNowButton /> <SignUpNowButton />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
