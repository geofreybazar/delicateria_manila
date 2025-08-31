"use client";

import Image from "next/image";
import facebook from "@/assets/Auth/facebook.png";

import { signIn } from "next-auth/react";
import { paragraph } from "@/lib/fonts/fonts";

const FacebookButton = () => {
  return (
    <button
      className={`${paragraph.className} bg-facebook py-2 px-5 rounded-full flex gap-3 justify-center items-center w-full`}
      onClick={() => signIn("facebook")}
    >
      <Image
        className='h-10 w-auto'
        src={facebook}
        alt='Google logo'
        priority
      />
      <span className='text-md lg:text-lg text-white '>
        Log in with Facebook
      </span>
    </button>
  );
};

export default FacebookButton;
