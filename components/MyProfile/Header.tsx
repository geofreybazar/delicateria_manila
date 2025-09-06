"use client";

import { useSession, signOut } from "next-auth/react";
import Links from "./Links";
import Link from "next/link";

const Header = () => {
  const { data } = useSession();
  const name = data?.user?.name || "User";

  return (
    <div className='w-full flex flex-col gap-4'>
      {/* Top Bar */}
      <div className='bg-white border-b border-gray-200'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 px-4 gap-4 sm:gap-0'>
          {/* User Info */}
          <div className='text-center sm:text-left'>
            <h1 className='text-xl sm:text-2xl font-bold text-gray-900'>
              Welcome, {name}
            </h1>
            <p className='text-gray-600 mt-1 text-sm sm:text-base'>
              Manage your account and orders
            </p>
          </div>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-end'>
            <Link href='/shop' className='w-full sm:w-auto'>
              <button className='w-full sm:w-auto cursor-pointer px-4 py-2 text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors'>
                Shop Now
              </button>
            </Link>
            <button
              className='w-full sm:w-auto cursor-pointer px-4 py-2 text-gray-600 hover:text-gray-900 underline'
              onClick={() => signOut()}
            >
              Sign-out
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='w-full px-4 py-2 text-ashBlack text-sm sm:text-base md:text-lg flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 md:gap-8'>
        <Links link='/myprofile'>Overview</Links>
        <Links link='/myprofile/account'>Account</Links>
        <Links link='/myprofile/orders'>Orders</Links>
      </div>
    </div>
  );
};

export default Header;
