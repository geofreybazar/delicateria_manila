"use client";

import Image from "next/image";
import google from "@/assets/Auth/google.png";

import { signIn } from "next-auth/react";
import { paragraph } from "@/lib/fonts/fonts";

const GoogleButton = () => {
  return (
    <button
      className={`${paragraph.className} cursor-pointer border border-black py-2 px-5 rounded-full flex justify-center items-center w-full`}
      onClick={() => signIn("google")}
    >
      <Image className='h-10 w-auto' src={google} alt='Google logo' priority />
      <span className='text-md lg:text-lg'>Sign in with Google</span>
    </button>
  );
};

export default GoogleButton;
