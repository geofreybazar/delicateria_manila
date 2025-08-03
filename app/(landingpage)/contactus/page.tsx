import Image from "next/image";
import picture from "@/assets/ContactUsPage/contactus.jpg";
import {
  MdOutlineMailOutline,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactUsPage = () => {
  return (
    <div className='w-full bg-offwhite'>
      <div className='lg:flex-row text-ashBlack mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-10'>
        <p className='text-5xl font-semibold pb-10'>Get in Touch</p>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-25 items-center'>
          <div className='w-full flex flex-col gap-10 order-2 lg:order-1 lg:w-1/2'>
            <div className='flex flex-col gap-4'>
              <p className='text-4xl'>
                <MdOutlineMailOutline />
              </p>
              <p className='text-3xl font-semibold'>Email</p>
              <p>Reach us anytime at our email address.</p>
              <p>info@delicateria.com</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-4xl'>
                <MdOutlineLocalPhone />
              </p>
              <p className='text-3xl font-semibold'>Phone</p>
              <p>Call us for inquiries or assistance.</p>
              <p>(+63)917 598 4486</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-4xl'>
                <MdOutlineLocationOn />
              </p>
              <p className='text-3xl font-semibold'>Office</p>
              <p>Visit us</p>
              <p>
                Ground Floor Royale Place Mall, Don Antonio Drive, Brgy. Old
                Balara, Quezon City, Philippines
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 h-96 lg:h-[600px] order-1 lg:order-2 relative ]'>
            <Image
              src={picture}
              alt='Delicateria Manila'
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
