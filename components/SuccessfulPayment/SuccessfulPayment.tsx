"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "../CheckoutPage/Header";
import { Button } from "@mui/material";

const SuccessfulPayment = ({ id }: { id: string }) => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("cartId");
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-50'>
      <Header />
      <div className='flex-1 py-10'>
        <div className=' w-full text-center'>
          <h1 className='text-3xl font-bold text-green-600 mb-4'>
            🎉 Payment Successful!
          </h1>
          <p className='text-lg text-gray-700 mb-1'>
            Thank you for your purchase.
          </p>
          <p className='text-gray-700'>Here is your reference number:</p>
          <p className='text-xl font-semibold text-ashBlack bg-customOrange px-3 py-1 rounded-md mt-1 mb-4'>
            {id}
          </p>
          <p className='text-lg text-gray-700 mb-1'>
            An invoice will be sent to your email.
          </p>
          <Button
            variant='contained'
            color='ashblack'
            onClick={() => router.push("/")}
          >
            Back to home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
