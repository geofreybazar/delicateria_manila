import logo from "@/assets/HomePage/logo.png";
import Image from "next/image";

import Input from "./Input";

const Footer = () => {
  return (
    <div className='w-full bg-ashBlack text-offwhite'>
      <div className='flex flex-col gap-5 mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-30'>
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-30'>
          <div className='w-full md:w-1/2 flex flex-col gap-5'>
            <div>
              <Image
                className='h-20 w-auto'
                src={logo}
                alt='Geo and Me Bridal Official logo'
                priority
              />
            </div>
            <div>
              <p>
                Subscribe to our newsletter for the latest updates on products
                and promotions.
              </p>
            </div>
            <div>
              <Input />
              <div>
                <p>
                  By joining, you consent to our Privacy Policy and receive
                  updates.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-col md:flex-row md:gap-5 gap-10'>
            <div className='w-1/2 flex flex-col gap-3'>
              <p className='font-semibold'>Resources</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQs</p>
              <p>Shipping Info</p>
              <p>Returns Policy</p>
            </div>
            <div className='w-1/2 flex flex-col gap-3'>
              <p className='font-semibold'>Follow Us</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>X</p>
              <p>Linkedin</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between border-t-2 py-5 gap-5'>
          <p>© 2025 Delicateria. All rights reserved.</p>
          <div className='flex flex-col md:flex-row gap-5'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
