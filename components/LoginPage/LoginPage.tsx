import { paragraph, title } from "@/lib/fonts/fonts";
import React from "react";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

const LoginPage = () => {
  return (
    <div className='w-full py-20 flex justify-center'>
      <div className='lg:w-1/2'>
        <div className='flex flex-col gap-5'>
          <p className={`${title.className} text-xl`}>Welcome Back</p>
          <p className={`${paragraph.className} `}>Log in to your account</p>
          <GoogleButton />
          <FacebookButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
