import { paragraph } from "@/lib/fonts/fonts";
import Questions from "./Questions";

const FAQS = () => {
  return (
    <div className='w-full bg-offwhite'>
      <div className='flex flex-col gap-5 mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-30'>
        <p className={`text-3xl lg:text-5xl font-bold ${paragraph.className}`}>
          FAQs
        </p>
        <p className='text-lg lg:text-2xl font-light'>
          Find answers to your questions about our products and services below.
        </p>
        <Questions />
      </div>
    </div>
  );
};

export default FAQS;
