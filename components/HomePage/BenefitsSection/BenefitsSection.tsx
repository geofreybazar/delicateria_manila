import Image from "next/image";
import picture from "@/assets/HomePage/BenefitsSection/image.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { PiThermometerColdBold } from "react-icons/pi";
import { MdAccessTimeFilled } from "react-icons/md";

const BenefitsSection = () => {
  return (
    <div className='w-full bg-benefits'>
      <div className='flex justify-between items-center text-offwhite mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-30'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-1/2 flex flex-col gap-5'>
            <div className='flex flex-col gap-5'>
              <p className='text-2xl lg:text-4xl'>
                Fresh Meat Delivered Daily by Our In-House Team
              </p>
              <p className='text-md lg:text-xl'>
                At Delicateria Manila, we don’t just deliver quality meats — we
                personally bring them to your door. With our trusted in-house
                delivery team, you’re guaranteed fast, fresh, and carefully
                handled orders every day.
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-full flex items-center gap-2'>
                <p className='w-[10%] text-xl lg:text-2xl'>
                  <MdDeliveryDining />
                </p>
                <p className='w-[90%] text-sm lg:text-lg'>
                  Daily deliveries across Metro Manila, handled exclusively by
                  our team.
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <p className='w-[10%] text-xl lg:text-2xl'>
                  <PiThermometerColdBold />
                </p>
                <p className='w-[90%] text-sm lg:text-lg'>
                  Strict cold-chain process to keep every cut fresh and
                  flavourful.
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <p className='w-[10%] text-xl lg:text-2xl'>
                  <MdAccessTimeFilled />
                </p>
                <p className='w-[90%] text-sm lg:text-lg'>
                  Reliable and timely service — because your meals deserve the
                  best, right on schedule. From our kitchen to yours —
                  freshness, guaranteed.
                </p>
              </div>
            </div>
          </div>
          <div className='flex md:block md:w-1/2 justify-center relative'>
            <div className='relative w-full h-72 md:w-full md:h-full  '>
              <Image
                src={picture}
                alt='Fresh meat delivery'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover rounded-md'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
